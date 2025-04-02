import {TypeormDatabase} from '@subsquid/typeorm-store'
import {LBTCTransfer, AccountSnapshot} from './model'
import { LBTC_PROXY, } from "./constant.js"
import {processor} from './processor'
import {BigDecimal} from '@subsquid/big-decimal'
import * as lbtcAbi from "./abi/LBTC.js"

// Write a processor and create dashboards to track various info for LBTC:
// • Emit transfer event logs for transfer events, require: sender, recipient and amount. (composing basic processors, use event logs)
// • Emit mint event logs, require: minter and amount. (use event filters)
// • Track all coin holders and their holding balances in a table. (write subgraph schema, use entities, create dashboards)
// • Be able to choose an account, and visualize his historical balance in a line chart.
// • Assuming users gain 1000 points for holding 1 LBTC/day, track their points in a table. Points need to be updated hourly.


processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    console.log(ctx.blocks)
    const transfers: LBTCTransfer[] = []
    const accountSnapshots: AccountSnapshot[] = []
    interface BalanceRecord {
        timestamp: bigint
        balance: BigDecimal
        point: BigDecimal
    }
    const balances = new Map<string, BalanceRecord>()
    // get current system timestamp
    var lastUpdateTimestamp = Date.now()

    for (let block of ctx.blocks) {
        console.log(block.header.height)
        for (let log of block.logs) {
            if (log.address === LBTC_PROXY &&
                log.topics[0] === lbtcAbi.events.Transfer.topic) {
                // SQD's very own EVM codec at work - about 20 times faster than ethers
                let {from, to, value} = lbtcAbi.events.Transfer.decode(log)
                transfers.push(new LBTCTransfer({
                    id: log.id,
                    block: block.header.height,
                    from,
                    to,
                    value
                }))

                // Update points for sender
                const fromBalanceRecord = balances.get(from) ?? { timestamp: BigInt(block.header.timestamp), balance: BigDecimal(0), point: BigDecimal(0) }
                const newFromBalance = fromBalanceRecord.balance.minus(BigDecimal(value))
                const newFromPoint = fromBalanceRecord.point.plus(
                    fromBalanceRecord.balance
                    .minus(newFromBalance)
                    .times(BigDecimal(1000/24/60/60)) // 1000 points per day
                    .times(BigDecimal((BigInt(block.header.timestamp) - fromBalanceRecord.timestamp)/BigInt(1000)))
                )
                balances.set(from, {
                    timestamp: BigInt(block.header.timestamp),
                    balance: newFromBalance,
                    point: newFromPoint
                })

                accountSnapshots.push(
                    new AccountSnapshot({
                        account: from,
                        timestampMilli: BigInt(block.header.timestamp),
                        balance: BigDecimal(newFromBalance),
                        point: BigDecimal(newFromPoint)
                    })
                )

                // Update points for receiver
                const toBalanceRecord = balances.get(to) ?? { timestamp: BigInt(block.header.timestamp), balance: BigDecimal(0), point: BigDecimal(0) }
                const newToBalance = toBalanceRecord.balance.plus(BigDecimal(value))
                const newToPoint = toBalanceRecord.point.plus(
                    newToBalance
                    .minus(toBalanceRecord.balance)
                    .times(BigDecimal(1000/24/60/60)) // 1000 points per day
                    .times(BigDecimal((BigInt(block.header.timestamp) - toBalanceRecord.timestamp)/BigInt(1000)))
                )
                balances.set(to, {
                    timestamp: BigInt(block.header.timestamp),
                    balance: newToBalance,
                    point: newToPoint
                })

                accountSnapshots.push(
                    new AccountSnapshot({
                        id: to,
                        account: to,
                        timestampMilli: BigInt(block.header.timestamp),
                        balance: newToBalance,
                        point: newToPoint
                    })
                )
            }
        }
        // if the last update timestamp is more than 1 hour than block timestamp, update the last update timestamp
        if (block.header.timestamp - lastUpdateTimestamp > 1000 * 60 * 60) {
            lastUpdateTimestamp = block.header.timestamp
            // update points for all balances
            for (const [account, balance] of balances.entries()) {
                balance.point = balance.point.plus(
                    balance.balance.times(BigDecimal(1000/24/60/60)) // 1000 points per day
                    .times(BigDecimal((BigInt(block.header.timestamp) - balance.timestamp)/BigInt(1000)))
                )
                accountSnapshots.push(
                    new AccountSnapshot({
                        account: account,
                        timestampMilli: BigInt(block.header.timestamp),
                        balance: balance.balance,
                        point: balance.point
                    })
                )
            }
        }
    }
    // // apply vectorized transformations and aggregations
    // const burned = burns.reduce((acc, b) => acc + b.value, 0n) / 1_000_000_000n
    // const startBlock = ctx.blocks.at(0)?.header.height
    // const endBlock = ctx.blocks.at(-1)?.header.height
    // ctx.log.info(`Burned ${burned} Gwei from ${startBlock} to ${endBlock}`)

    // upsert batches of entities with batch-optimized ctx.store.insert()/upsert()
    await ctx.store.insert(transfers)
    await ctx.store.insert(accountSnapshots)
})
