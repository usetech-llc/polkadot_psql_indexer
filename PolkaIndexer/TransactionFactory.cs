using Polkadot.Data;
using Polkadot.DataStructs.Metadata;
using PolkaIndexer.DAL;
using System;
using System.Collections.Generic;

namespace PolkaIndexer
{
    interface ISpecificTransaction
    {
        void Execute(int transactionId);
        bool Parse(BlockHash bh, SignedBlock sb, string extrinsic);
    }

    internal class TransactionFactory
    {
        readonly Metadata _transactionSchema;
        readonly IDatabaseAdapdable _dbAdapter;
        private List<ISpecificTransaction> _specificTransactions;

        internal TransactionFactory(Metadata metadata, IDatabaseAdapdable databaseAdapdable)
        {
            _transactionSchema = metadata;
            _dbAdapter = databaseAdapdable;

            _specificTransactions = new List<ISpecificTransaction>
            {
                // default scalar or vector transaction 
                new BalancesTransferTransaction(_dbAdapter, _transactionSchema),
                new BalancesSetBalanceTransaction(_dbAdapter, _transactionSchema),
                new BalancesForceTransferTransaction(_dbAdapter, _transactionSchema),
                new BalancesTransferKeepAliveTransaction(_dbAdapter, _transactionSchema),
                new StakingBondTransaction(_dbAdapter, _transactionSchema),
                new StakingBondExtraTransaction(_dbAdapter, _transactionSchema),
                new StakingUnbondTransaction(_dbAdapter, _transactionSchema),
                new StakingWithdrawUnbondedTransaction(_dbAdapter, _transactionSchema),
                new StakingValidateTransaction(_dbAdapter, _transactionSchema),
                new StakingNominateTransaction(_dbAdapter, _transactionSchema),
                new StakingChillTransaction(_dbAdapter, _transactionSchema),
                new StakingSetPayeeTransaction(_dbAdapter, _transactionSchema),
                new StakingSetControllerTransaction(_dbAdapter, _transactionSchema),
                new StakingForceUnstakeTransaction(_dbAdapter, _transactionSchema),
                new StakingCancelDeferredSlashTransaction(_dbAdapter, _transactionSchema),
                new StakingSetValidatorCountTransaction(_dbAdapter, _transactionSchema),
                new SessionSetKeysTransaction(_dbAdapter, _transactionSchema),
                new DemocracyProposeTransaction(_dbAdapter, _transactionSchema),
                new DemocracySecondTransaction(_dbAdapter, _transactionSchema),
                new DemocracyVoteTransaction(_dbAdapter, _transactionSchema),
                new DemocracyCancelReferendumTransaction(_dbAdapter, _transactionSchema),
                new IdentityAddRegistrarTransaction(_dbAdapter, _transactionSchema),
                new IdentityCancelRequestTransaction(_dbAdapter, _transactionSchema),
                new IdentityClearIdentityTransaction(_dbAdapter, _transactionSchema),
                new IdentityKillIdentityTransaction(_dbAdapter, _transactionSchema),
                new IdentityProvideJudgementTransaction(_dbAdapter, _transactionSchema),
                new IdentityRequestJudgementTransaction(_dbAdapter, _transactionSchema),
                new IdentitySetAccountIdTransaction(_dbAdapter, _transactionSchema),
                new IdentitySetFeeTransaction(_dbAdapter, _transactionSchema),
                new IdentitySetFieldsTransaction(_dbAdapter, _transactionSchema),
                new IdentitySetIdentityTransaction(_dbAdapter, _transactionSchema),
                new IdentitySetSubsTransaction(_dbAdapter, _transactionSchema),
                new NotSpecificTransaction(_dbAdapter, _transactionSchema)
            };
        }

        internal ISpecificTransaction GetTransactionSpecific(BlockHash bh, SignedBlock sb, string ex)
        {
            foreach (var st in _specificTransactions)
            {
                try
                {
                    if (st.Parse(bh, sb, ex))
                        return st;
                }
                catch (Exception)
                {
                    continue;
                }
            }

            return new UnknownTransaction();
        }
    }
}