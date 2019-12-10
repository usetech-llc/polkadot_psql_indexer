namespace PolkaIndexer.DAL
{
    public interface IDatabaseTypeAdapter
    {
        string SubstrateTypeToStringDBType(string substrateType);
    }
}