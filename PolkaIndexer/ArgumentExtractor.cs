using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace PolkaIndexer
{
    public class ArgumentExtractor
    {
        string _pre;
        List<string> _argsMasks;

        public ArgumentExtractor(string pre, List<string> argsMasks)
        {
            _pre = pre;
            _argsMasks = argsMasks;
        }

        public IEnumerable<string> Extract(string input)
        {
            var parsed = new List<string>();

            var fullMask = _pre + string.Join(string.Empty, _argsMasks.ToArray());
            var eventString = new Regex(fullMask).Matches(input);

            if (eventString.Count > 0)
            {
                var ev = eventString[0].ToString();
                _ = GetArgument(_pre, ref ev);

                foreach (var evMask in _argsMasks)
                {
                    parsed.Add(Revert(GetArgument(evMask, ref ev)));
                }
            }

            return parsed;
        }

        public static string Revert(string value)
        {
            if (value.Length % 2 != 0)
                throw new ArithmeticException();

            string s = string.Empty;
            var l = value.Length;

            for (var i = l; i > 0; i -= 2)
            {
                s += value.Substring(i - 2, 2);
            }

            return s;
        }

        private static string GetArgument(string mask, ref string eventString)
        {
            var m = "^" + mask;
            var arg = new Regex(m).Matches(eventString)[0].ToString();
            eventString = new Regex(m).Replace(eventString, string.Empty);
            return arg;
        }
    }
}
