import {assertNotNull} from '@subsquid/util-internal'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'
import { LBTC_PROXY, } from "./constant.js"
import * as lbtcAbi from "./abi/LBTC.js"

// Write a processor and create dashboards to track various info for LBTC:
// • Emit transfer event logs for transfer events, require: sender, recipient and amount. (composing basic processors, use event logs)
// • Emit mint event logs, require: minter and amount. (use event filters)
// • Track all coin holders and their holding balances in a table. (write subgraph schema, use entities, create dashboards)
// • Be able to choose an account, and visualize his historical balance in a line chart.
// • Assuming users gain 1000 points for holding 1 LBTC/day, track their points in a table. Points need to be updated hourly.


export const processor = new EvmBatchProcessor()
    .setGateway('https://v2.archive.subsquid.io/network/ethereum-mainnet')
    // Another data source squid processors can use is chain RPC.
    // In this particular squid it is used to retrieve the very latest chain data
    // (including unfinalized blocks) in real time. It can also be used to
    //   - make direct RPC queries to get extra data during indexing
    //   - sync a squid without a gateway (slow)
    .setRpcEndpoint('https://rpc.ankr.com/eth')
    .setFinalityConfirmation(75)
	.addLog({
		address: [LBTC_PROXY],
		topic0: [lbtcAbi.events.Transfer.topic],
		transaction: false,
		transactionLogs: false,
	})
    .setBlockRange({
        from: 0,
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
