namespace WebApi.DTO
{
    public class BlockData
    {
        public string Type { get; set; }
        public string Id { get; set; }
        public BlockDataAttribute Attributes { get; set; }
        public Relationship Relationships { get; set; }
    }

    public class BlockDataAttribute
    {
        public string Id { get; set; }
        public string ParentId { get; set; }
        public string Hash { get; set; }
        public string ParentHash { get; set; }
        public string StateRoot { get; set; }
        public string Signed { get; set; }
        public string ExtrinsicsToot { get; set; }
        public string CountExtrinsics { get; set; }
        public string CountExtrinsicsUnsigned { get; set; }
        public string CountExtrinsicsSigned { get; set; }
        public string CountExtrinsicsError { get; set; }
        public string CountExtrinsicsSuccess { get; set; }
        public string CountExtrinsicsSignedbyAddress { get; set; }
        public string CountExtrinsicsSignedbyIndex { get; set; }
        public string CountEvents { get; set; }
        public string CountEventsSystem { get; set; }
        public string CountEventsModule { get; set; }
        public string CountEventsExtrinsic { get; set; }
        public string CountEventsFinalization { get; set; }
        public string CountAccounts { get; set; }
        public string CountAccountsNew { get; set; }
        public string CountAccountsReaped { get; set; }
        public string CountSessionsNew { get; set; }
        public string CountContractsNew { get; set; }
        public string CountLog { get; set; }
        public string Range10000 { get; set; }
        public string Range100000 { get; set; }
        public string Range1000000 { get; set; }
        public string Datetime { get; set; }
        public string Year { get; set; }
        public string Mounth { get; set; }
        public string Week { get; set; }
        public string Day { get; set; }
        public string Hour { get; set; }
        public string FullMonth { get; set; }
        public string FullWeek { get; set; }
        public string FullDay { get; set; }
        public string FullHour { get; set; }
        public string SpecVersionId { get; set; }
        public string[] Logs { get; set; }
    }
}