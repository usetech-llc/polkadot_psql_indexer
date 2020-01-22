using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;

namespace PolkaIndexer
{
    class SubstrateUtils
    {
        private Dictionary<SubstrateType, Enum> _substrateToDbMapping;
        private string _defaultType;

        public SubstrateUtils(Dictionary<SubstrateType, Enum> substrateToDbMapping, string defaultType = "varchar[100]")
        {
            _substrateToDbMapping = substrateToDbMapping;
            _defaultType = defaultType;
        }

        private T GetValueFromDescription<T>(string description)
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

        public string GetDescription(Enum GenericEnum)
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

        public string SubstrateTypeToStringDBType(string t)
        {
            try
            {
                var typeSubstrate = GetValueFromDescription<SubstrateType>(t);
                var typeDatabase = _substrateToDbMapping[typeSubstrate];
                return GetDescription(typeDatabase);
            }
            catch (ArgumentException)
            {
                return _defaultType;
            }
            catch (KeyNotFoundException e)
            {
                // TODO: Remove this handler, should never happen
                Console.WriteLine("!!!!!!!!!!! " + e.Message);
                return "";
            }
        }
    }
}
