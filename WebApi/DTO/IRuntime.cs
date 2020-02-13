namespace WebApi.Controllers
{
    public class Runtime : IRuntime
    {
        private string _runtime;
        public Runtime(string runtime)
        {
            _runtime = runtime;
        }

        public string Get()
        {
            return _runtime;
        }
    }

    public interface IRuntime
    {
        string Get();
    }
}