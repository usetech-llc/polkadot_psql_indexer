using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using Polkadot.Api;
using PolkaIndexer;
using PolkaIndexer.DAL;
using System.Configuration;
using System.IO;
using WebApi.Controllers;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder =>
                {
                    builder.WithOrigins(ConfigurationManager.AppSettings["ClientUIHost"])
                      .AllowAnyHeader()
                      .AllowAnyMethod()
                      .AllowCredentials();
                });
            });


            MetadataSchema sch = MetadataSchema.GetDbg();

            // ConfigurationManager.AppSettings["Substrate"];

            //MetadataSchema sch = new MetadataSchema();
            //using (IApplication app = PolkaApi.GetAppication())
            //{
            //    app.Connect("wss://kusama-rpc.polkadot.io/");
            //    sch.ParseMetadata(app.GetMetadata(null));
            //    app.Disconnect();
            //}

            var rt = File.ReadAllText("runtime.txt");

            var dataReader = new Postgres(ConfigurationManager.ConnectionStrings["Postgres"].ConnectionString);
            services.AddSingleton(sch);
            services.AddSingleton(dataReader);
            services.AddSingleton<IRuntime>(new Runtime(rt));
            services.AddSingleton<IWebApiDataAdapter>(new IndexedWebApi(dataReader, sch));
            services.AddMvc()
                .AddJsonOptions(x =>
                {
                    x.SerializerSettings.ContractResolver = new DefaultContractResolver
                    {
                        NamingStrategy = new SnakeCaseNamingStrategy()
                    };
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors(MyAllowSpecificOrigins);

            //app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
