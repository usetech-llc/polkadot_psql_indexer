using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace WebApi.Tools
{
    public static class UriParse
    {
        public static Dictionary<string, Dictionary<string, string>> PolkadotParseUri(string uri)
        {
            if (uri.Equals(string.Empty))
            {
                return new Dictionary<string, Dictionary<string, string>>();
            }

            var qParams = uri.Substring(1);
            var rawParamsList = qParams.Split('&');

            var paramNameRe = new Regex("\\[\\w*\\]");
            var groupNameRe = new Regex("\\w*\\[");
            var argValueRe = new Regex("=\\w*");

            var uriParams = new Dictionary<string, Dictionary<string, string>>();

            foreach (var item in rawParamsList)
            {
                var groupName = groupNameRe.Match(item).Captures[0].Value;
                groupName = groupName.Substring(0, groupName.Length - 1);
                var paramName = paramNameRe.Match(item).Captures[0].Value;
                paramName = paramName.Substring(1, paramName.Length - 2);
                var argValue = argValueRe.Match(item).Captures[0].Value.Substring(1);

                if (uriParams.ContainsKey(groupName))
                {
                    uriParams.GetValueOrDefault(groupName).Add(paramName, argValue);
                }
                else
                {
                    var fp = new Dictionary<string, string>
                    {
                        { paramName, argValue }
                    };

                    uriParams.Add(groupName, fp);
                }
            }

            return uriParams;
        }

        public static bool NotNullOrEmpty(string str)
        {
            return !((!str.Equals(string.Empty)) || str != null);
        }

        public static string TryGetValue(Dictionary<string, Dictionary<string, string>> parsedPolkaUri, string path1, string path2)
        {
            Dictionary<string, string> obj;
            string value = string.Empty;

            if (parsedPolkaUri.TryGetValue(path1, out obj))
            {
                obj.TryGetValue(path2, out value);
            }

            return value;
        }
    }
}
