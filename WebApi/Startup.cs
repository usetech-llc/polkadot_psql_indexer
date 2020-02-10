using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Polkadot.Api;
using PolkaIndexer;
using PolkaIndexer.DAL;

namespace WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            MetadataSchema sch = new MetadataSchema();
            using (IApplication app = PolkaApi.GetAppication())
            {
                app.Connect("wss://kusama-rpc.polkadot.io/");
                sch.ParseMetadata(app.GetMetadata(null));
                app.Disconnect();
            }

            var dataReader = new Postgres(Postgres.GetConnectionString());
            services.AddSingleton(sch);
            services.AddSingleton(dataReader);
            services.AddSingleton<IWebApiDataAdapter>(new IndexedWebApi(dataReader, sch));
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

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
