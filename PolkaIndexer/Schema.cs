using Polkadot.DataStructs.Metadata;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Text;

namespace PolkaIndexer
{
    class SchemaException : Exception
    {
        public SchemaException(string message) : base(message)
        {}
    }

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

        [Description("Perbill")]
        Perbill,

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

    enum DataType : byte
    {
        [Description("varchar[50]")]
        Address,

        [Description("integer")]
        IntegerType,

        [Description("bigint")]
        BigInteger,

        [Description("varchar[25]")]
        WeightMultiplier,

        [Description("bigint")]
        BlockNumber,

        [Description("bigint")]
        Index,

        [Description("varchar[70]")]
        Hash,

        [Description("varchar[20]")]
        EventIndex,

        [Description("timestamp")]
        Moment,

        [Description("bit[1]")]
        BooleanType,

        [Description("integer")]
        AccountIndex,

        [Description("varchar[40]")]
        Balance,

        [Description("integer")]
        EraIndex,

        [Description("integer")]
        SessionIndex,

        [Description("integer")]
        EraPoints


        /*


        [Description("Forcing")]
        Forcing,

        [Description("Perbill")]
        Perbill,

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
        */


    }

    class DataField
    {
        public string Name;
        public DataType Type;
    };

    class DataTable
    {
        public string Name;
        public DataField[] Fields;
    };


    class Schema
    {
        private Dictionary<SubstrateType, DataType> TypeMapping = new Dictionary<SubstrateType, DataType>()
        {
            { SubstrateType.Address, DataType.Address },
            { SubstrateType.U8, DataType.IntegerType },
            { SubstrateType.U32, DataType.IntegerType },
            { SubstrateType.U64, DataType.BigInteger },
            { SubstrateType.Index, DataType.Index },
            { SubstrateType.BlockNumber, DataType.BlockNumber },
            { SubstrateType.Hash, DataType.Hash },
            { SubstrateType.WeightMultiplier, DataType.WeightMultiplier },

        };

        private DataTable[] _databaseSchema;


        private static T GetValueFromDescription<T>(string description)
        {
            var type = typeof(T);
            if (!type.IsEnum) throw new InvalidOperationException();
            foreach (var field in type.GetFields())
            {
                var attribute = Attribute.GetCustomAttribute(field,
                    typeof(DescriptionAttribute)) as DescriptionAttribute;
                if (attribute != null)
                {
                    if (attribute.Description == description)
                        return (T)field.GetValue(null);
                }
                else
                {
                    if (field.Name == description)
                        return (T)field.GetValue(null);
                }
            }
            throw new ArgumentException("Not found. ", nameof(description));
        }

        public static string GetDescription(Enum GenericEnum)
        {
            Type genericEnumType = GenericEnum.GetType();
            MemberInfo[] memberInfo = genericEnumType.GetMember(GenericEnum.ToString());
            if ((memberInfo != null && memberInfo.Length > 0))
            {
                var _Attribs = memberInfo[0].GetCustomAttributes(typeof(System.ComponentModel.DescriptionAttribute), false);
                if ((_Attribs != null && _Attribs.Count() > 0))
                {
                    return ((System.ComponentModel.DescriptionAttribute)_Attribs.ElementAt(0)).Description;
                }
            }
            return GenericEnum.ToString();
        }

        private string SubstrateTypeToStringDBType(string t)
        {
            try
            {
                var typeSubstrate = GetValueFromDescription<SubstrateType>(t);
                var typeDatabase = TypeMapping[typeSubstrate];
                return GetDescription(typeDatabase);
            }
            catch (ArgumentException)
            {
                return "varchar[100]";
            }
            catch (KeyNotFoundException e)
            {
                // TODO: Remove this handler, should never happen
                Console.WriteLine("!!!!!!!!!!! " + e.Message);
                return "";
            }
        }

        public void ParseMetadata(MetadataBase metadata)
        {
            if (metadata.Version == 7)
            {
                MetadataV7 mv7 = (MetadataV7)metadata;

                for (int i = 0; i < mv7.Module.Length; i++)
                {
                    string moduleName = mv7.Module[i].Name;
                    if (null != mv7.Module[i].Storage)
                    {
                        for (int j = 0; j < mv7.Module[i].Storage.Items.Length; j++)
                        {
                            string tableName = $"{moduleName}.{mv7.Module[i].Storage.Items[j].Name}";

                            if (mv7.Module[i].Storage.Items[j].Type.Type == 0) // Plain
                            { }
                            else if (mv7.Module[i].Storage.Items[j].Type.Type == 1) // Map - converts to a tabe with one column key
                            {
                                string keyType = SubstrateTypeToStringDBType(mv7.Module[i].Storage.Items[j].Type.Key1);
                                string valueType = SubstrateTypeToStringDBType(mv7.Module[i].Storage.Items[j].Type.Value);

                                Console.WriteLine($"CREATE TABLE {tableName}\n    key {keyType} PRIMARY KEY,\n    val {valueType}\n);\n");
                            }
                            else if (mv7.Module[i].Storage.Items[j].Type.Type == 4) // Double Map - converts to a table with primary key consisting of two columns
                            {
                                //Console.WriteLine($"Map key1: {mv7.Module[i].Storage.Items[j].Type.Key1}, Map key2: {mv7.Module[i].Storage.Items[j].Type.Key2}, Map value: {mv7.Module[i].Storage.Items[j].Type.Value}");
                            }
                        }
                    }
                }

            }
            else
            {
                throw new SchemaException($"Metadata version {metadata.Version} is not supported");
            }
        }



    }
}
