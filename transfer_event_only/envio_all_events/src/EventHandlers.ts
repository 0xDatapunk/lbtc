/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxy_AdminChanged,
  TransparentUpgradeableProxy_Approval,
  TransparentUpgradeableProxy_BasculeChanged,
  TransparentUpgradeableProxy_BatchMintSkipped,
  TransparentUpgradeableProxy_BridgeChanged,
  TransparentUpgradeableProxy_BurnCommissionChanged,
  TransparentUpgradeableProxy_ClaimerUpdated,
  TransparentUpgradeableProxy_ConsortiumChanged,
  TransparentUpgradeableProxy_DustFeeRateChanged,
  TransparentUpgradeableProxy_EIP712DomainChanged,
  TransparentUpgradeableProxy_FeeChanged,
  TransparentUpgradeableProxy_FeeCharged,
  TransparentUpgradeableProxy_Initialized,
  TransparentUpgradeableProxy_MintProofConsumed,
  TransparentUpgradeableProxy_MinterUpdated,
  TransparentUpgradeableProxy_NameAndSymbolChanged,
  TransparentUpgradeableProxy_OperatorRoleTransferred,
  TransparentUpgradeableProxy_OwnershipTransferStarted,
  TransparentUpgradeableProxy_OwnershipTransferred,
  TransparentUpgradeableProxy_Paused,
  TransparentUpgradeableProxy_PauserRoleTransferred,
  TransparentUpgradeableProxy_Transfer,
  TransparentUpgradeableProxy_TreasuryAddressChanged,
  TransparentUpgradeableProxy_Unpaused,
  TransparentUpgradeableProxy_UnstakeRequest,
  TransparentUpgradeableProxy_Upgraded,
  TransparentUpgradeableProxy_WithdrawalsEnabled,
} from "generated";

TransparentUpgradeableProxy.AdminChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.TransparentUpgradeableProxy_AdminChanged.set(entity);
});

TransparentUpgradeableProxy.Approval.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.TransparentUpgradeableProxy_Approval.set(entity);
});

TransparentUpgradeableProxy.BasculeChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_BasculeChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    prevVal: event.params.prevVal,
    newVal: event.params.newVal,
  };

  context.TransparentUpgradeableProxy_BasculeChanged.set(entity);
});

TransparentUpgradeableProxy.BatchMintSkipped.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_BatchMintSkipped = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    payloadHash: event.params.payloadHash,
    payload: event.params.payload,
  };

  context.TransparentUpgradeableProxy_BatchMintSkipped.set(entity);
});

TransparentUpgradeableProxy.BridgeChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_BridgeChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    prevVal: event.params.prevVal,
    newVal: event.params.newVal,
  };

  context.TransparentUpgradeableProxy_BridgeChanged.set(entity);
});

TransparentUpgradeableProxy.BurnCommissionChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_BurnCommissionChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    prevValue: event.params.prevValue,
    newValue: event.params.newValue,
  };

  context.TransparentUpgradeableProxy_BurnCommissionChanged.set(entity);
});

TransparentUpgradeableProxy.ClaimerUpdated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_ClaimerUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    claimer: event.params.claimer,
    isClaimer: event.params.isClaimer,
  };

  context.TransparentUpgradeableProxy_ClaimerUpdated.set(entity);
});

TransparentUpgradeableProxy.ConsortiumChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_ConsortiumChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    prevVal: event.params.prevVal,
    newVal: event.params.newVal,
  };

  context.TransparentUpgradeableProxy_ConsortiumChanged.set(entity);
});

TransparentUpgradeableProxy.DustFeeRateChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_DustFeeRateChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldRate: event.params.oldRate,
    newRate: event.params.newRate,
  };

  context.TransparentUpgradeableProxy_DustFeeRateChanged.set(entity);
});

TransparentUpgradeableProxy.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.TransparentUpgradeableProxy_EIP712DomainChanged.set(entity);
});

TransparentUpgradeableProxy.FeeChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_FeeChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldFee: event.params.oldFee,
    newFee: event.params.newFee,
  };

  context.TransparentUpgradeableProxy_FeeChanged.set(entity);
});

TransparentUpgradeableProxy.FeeCharged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_FeeCharged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fee: event.params.fee,
    userSignature: event.params.userSignature,
  };

  context.TransparentUpgradeableProxy_FeeCharged.set(entity);
});

TransparentUpgradeableProxy.Initialized.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.TransparentUpgradeableProxy_Initialized.set(entity);
});

TransparentUpgradeableProxy.MintProofConsumed.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_MintProofConsumed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    recipient: event.params.recipient,
    payloadHash: event.params.payloadHash,
    payload: event.params.payload,
  };

  context.TransparentUpgradeableProxy_MintProofConsumed.set(entity);
});

TransparentUpgradeableProxy.MinterUpdated.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_MinterUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minter: event.params.minter,
    isMinter: event.params.isMinter,
  };

  context.TransparentUpgradeableProxy_MinterUpdated.set(entity);
});

TransparentUpgradeableProxy.NameAndSymbolChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_NameAndSymbolChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    name: event.params.name,
    symbol: event.params.symbol,
  };

  context.TransparentUpgradeableProxy_NameAndSymbolChanged.set(entity);
});

TransparentUpgradeableProxy.OperatorRoleTransferred.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_OperatorRoleTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOperator: event.params.previousOperator,
    newOperator: event.params.newOperator,
  };

  context.TransparentUpgradeableProxy_OperatorRoleTransferred.set(entity);
});

TransparentUpgradeableProxy.OwnershipTransferStarted.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_OwnershipTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.TransparentUpgradeableProxy_OwnershipTransferStarted.set(entity);
});

TransparentUpgradeableProxy.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.TransparentUpgradeableProxy_OwnershipTransferred.set(entity);
});

TransparentUpgradeableProxy.Paused.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.TransparentUpgradeableProxy_Paused.set(entity);
});

TransparentUpgradeableProxy.PauserRoleTransferred.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_PauserRoleTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousPauser: event.params.previousPauser,
    newPauser: event.params.newPauser,
  };

  context.TransparentUpgradeableProxy_PauserRoleTransferred.set(entity);
});

TransparentUpgradeableProxy.Transfer.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.TransparentUpgradeableProxy_Transfer.set(entity);
});

TransparentUpgradeableProxy.TreasuryAddressChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_TreasuryAddressChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    prevValue: event.params.prevValue,
    newValue: event.params.newValue,
  };

  context.TransparentUpgradeableProxy_TreasuryAddressChanged.set(entity);
});

TransparentUpgradeableProxy.Unpaused.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Unpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.TransparentUpgradeableProxy_Unpaused.set(entity);
});

TransparentUpgradeableProxy.UnstakeRequest.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_UnstakeRequest = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fromAddress: event.params.fromAddress,
    scriptPubKey: event.params.scriptPubKey,
    amount: event.params.amount,
  };

  context.TransparentUpgradeableProxy_UnstakeRequest.set(entity);
});

TransparentUpgradeableProxy.Upgraded.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.TransparentUpgradeableProxy_Upgraded.set(entity);
});

TransparentUpgradeableProxy.WithdrawalsEnabled.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_WithdrawalsEnabled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _0: event.params._0,
  };

  context.TransparentUpgradeableProxy_WithdrawalsEnabled.set(entity);
});
