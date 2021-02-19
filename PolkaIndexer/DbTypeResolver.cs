using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace PolkaIndexer
{
    public class ExtendedType
    {
        public string TypeName { get; set; }
        public bool IsPrimitive { get; set; }
        public string PrimitiveType { get; set; }
        public Dictionary<string, string> NestedTypes { get; set; }
    }

    public class WildcardResolver
    {
        public string ClearName(string t1)
        {
            var re = new Regex("^(\\w*::)|(<.*>)");
            return re.Replace(t1, string.Empty);
        }

        public PrimitiveType Clear(PrimitiveType t1)
        {
            var re = new Regex("^(\\w*::)|(<.*>)");
            return new PrimitiveType
            {
                Name = re.Replace(t1.Name, string.Empty),
                Size = t1.Size
            };
        }

        public bool Equals(string t1, string t2)
        {
            return ClearName(t1).Equals(ClearName(t2));
        }
    }

    public class PrimitiveType
    {
        public string Name { get; set; }
        public string Size { get; set; }
    }

    public class TypeResolver
    {
        const string _enumTypeName = "string";
        const string _notFoundTypeName = "error";
        List<PrimitiveType> _primitiveTypes;
        List<ExtendedType> _extendedTypes;
        WildcardResolver _wcr;

        public TypeResolver(IEnumerable<PrimitiveType> baseTypes, IEnumerable<JToken> extendedTypes)
        {
            _wcr = new WildcardResolver();
            _extendedTypes = new List<ExtendedType>();
            _primitiveTypes = baseTypes.ToList();
            foreach (var type in extendedTypes)
            {
                AddExtendedType(type);
            }
        }

        public void AddExtendedType(JToken extendedType)
        {
            var primitiveType = string.Empty;
            var isPrimitive = false;
            var name = ((JProperty)extendedType).Name.ToString();
            var nestedTypes = new Dictionary<string, string>();

            foreach (var ch in extendedType.Children())
            {
                if (ch.Children().Count() == 0)
                {
                    // primitive
                    isPrimitive = true;
                    primitiveType = _wcr.ClearName(((JProperty)extendedType).Value.ToString());
                }
                else if (ch.Children().Count() == 1)
                {
                    // enum 
                    isPrimitive = false;
                    primitiveType = ((JProperty)extendedType).Value.ToString();

                }
                else
                {
                    // object
                    foreach (var subch in ch)
                    {
                        nestedTypes.Add(
                            ((JProperty)subch).Name.ToString(),
                            ((JProperty)subch).Value.ToString());
                    }
                }
            }

            _extendedTypes.Add(new ExtendedType
            {
                TypeName = name,
                NestedTypes = nestedTypes,
                IsPrimitive = isPrimitive,
                PrimitiveType = primitiveType
            });
        }

        public void AddExtendedType((string, string) extendedType)
        {
            var primitiveType = extendedType.Item2;
            var isPrimitive = false;
            var name = extendedType.Item1;
            var nestedTypes = new Dictionary<string, string>();

            _extendedTypes.Add(new ExtendedType
            {
                TypeName = name,
                NestedTypes = nestedTypes,
                IsPrimitive = isPrimitive,
                PrimitiveType = primitiveType
            });
        }

        public void AddPrimitiveType(PrimitiveType extendedType)
        {
            var t = _wcr.Clear(extendedType);
            if (!_primitiveTypes.Contains(t))
                _primitiveTypes.Add(t);
        }

        public IEnumerable<(string, string)> Resolve(string typeName)
        {
            var n = _wcr.ClearName(typeName);
            return ResolveFunc(n, n);
        }

        private IEnumerable<(string, string)> ResolveFunc(string paramName, string typeName)
        {
            var result = new List<(string, string)>();

            // Type is primitive
            if (_primitiveTypes.Where(i => i.Name.Equals(_wcr.ClearName(typeName))).Any())
                return new List<(string, string)>() { (paramName, _wcr.ClearName(typeName)) };

            var type = _extendedTypes.FirstOrDefault(i => _wcr.Equals(i.TypeName, typeName));
            if (type != null)
            {
                if (type.IsPrimitive)
                {
                    result.Add((paramName, type.PrimitiveType));
                }

                // enum check
                if ((!type.IsPrimitive) && (type.NestedTypes.Count() == 0))
                    result.Add((paramName, _enumTypeName));

                // custom type
                foreach (var t in type.NestedTypes)
                {
                    result.AddRange(ResolveFunc($"{paramName}_{t.Key}", t.Value));
                }
            }
            else
            {
                result.Add((paramName, _notFoundTypeName));
            }

            return result;
        }

        public string GetTypeSize(string typeName)
        {
            return _primitiveTypes.FirstOrDefault(i => i.Name.Equals(typeName))?.Size ?? "0";
        }
    }

}
