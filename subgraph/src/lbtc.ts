import {
  Transfer as TransferEvent,
  Upgraded as UpgradedEvent
} from "../generated/lbtc/lbtc"
import { Transfer, Upgraded } from "../generated/schema"
import { Contract } from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  // Get current implementation
  let contract = Contract.load("1")
  if (!contract) {
    contract = new Contract("1")
  }

  // Create transfer entity
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.implementation = contract.implementation // Track which implementation handled this transfer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  // Update the current implementation
  let contract = Contract.load("1")
  if (!contract) {
    contract = new Contract("1")
  }
  contract.implementation = event.params.implementation
  contract.lastUpgradeBlock = event.block.number
  contract.lastUpgradeTimestamp = event.block.timestamp
  contract.save()
}
