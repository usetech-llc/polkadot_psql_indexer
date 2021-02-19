namespace PolkaIndexer
{
    using System.ComponentModel;

    enum SubstrateType : byte
    {
        [Description("T::AccountId")]
        Address,

        [Description("u8")]
        U8,

        [Description("u32")]
        U32,

        [Description("u64")]
        U64,

        [Description("WeightMultiplier")]
        WeightMultiplier,

        [Description("T::BlockNumber")]
        BlockNumber,

        [Description("T::Index")]
        Index,

        [Description("T::Hash")]
        Hash,

        [Description("EventIndex")]
        EventIndex,

        [Description("T::Moment")]
        Moment,

        [Description("Moment")]
        Moment2,

        [Description("bool")]
        BooleanType,

        [Description("T::AccountIndex")]
        AccountIndex,

        [Description("T::Balance")]
        Balance,

        [Description("EraIndex")]
        EraIndex,

        [Description("SessionIndex")]
        SessionIndex,

        [Description("EraPoints")]
        EraPoints,

        [Description("Forcing")]
        Forcing,

        [Description("SetId")]
        SetId,

        [Description("PropIndex")]
        PropIndex,

        [Description("ReferendumIndex")]
        ReferendumIndex,

        [Description("VoteIndex")]
        VoteIndex,

        [Description("SetIndex")]
        SetIndex,

        [Description("ParaId")]
        ParaId,

        [Description("AuctionIndex")]
        AuctionIndex

        /*
        Vec <UncleEntryItem<T::BlockNumber, T::Hash, T::AccountId>>
        Vec<T::AccountId>
        Vec<T::AccountId>
        MomentOf<T>
        BalanceOf<T>
        Vec<(EraIndex, SessionIndex)>
        Vec<T::ValidatorId>
        Vec<(T::ValidatorId, T::Keys)>
        Vec<u32>
        Vec<(AuthorityId, AuthorityWeight)>
        StoredState<T::BlockNumber>
        StoredPendingChange<T::BlockNumber>
        (T::BlockNumber, T::BlockNumber)
        Vec<T::AuthorityId>
        Vec<(PropIndex, T::Proposal, T::AccountId)>
        (T::Proposal, VoteThreshold)
        Vec<T::Hash>
        Vec<T::AccountId>
        Vec<T::Hash>
        Vec<T::AccountId>
        Vec<(T::AccountId, T::BlockNumber)>
        Vec<T::AccountId>
        (T::BlockNumber, u32, Vec<T::AccountId>)
        Vec<(BalanceOf<T>, T::AccountId)>
        Vec<T::AccountId>
        Vec<ProposalIndex>
        BalanceOf<T>
        Vec<ValidatorId>
        Vec<ParaId>
        Vec<ParaIdOf<T>>
        (LeasePeriodOf<T>, T::BlockNumber)
        (i8, Vec<T::Hash>)
        DigestOf<T>
        Vec<EventRecord<T::Event, T::Hash>>
        Vec<(AuthorityId, BabeAuthorityWeight)>
        [u8; 32]
        MaybeVrf
        */
    }
}
