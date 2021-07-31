using Core.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using Core.Entities.OrderAggregate;
using Microsoft.Azure.Services.AppAuthentication;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;

namespace Infrastructure.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options,AzureServiceTokenProvider azureServiceTokenProvider,
            IConfiguration configuration) : base(options)
        {
            _azureServiceTokenProvider = azureServiceTokenProvider;
            _configuration = configuration;
        }
        private AzureServiceTokenProvider _azureServiceTokenProvider;
        private readonly IConfiguration _configuration;

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<ProductBrand> ProductBrands { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<DeliveryMethod> DeliveryMethods { get; set; }
        public DbContextOptions<StoreContext> Options { get; }
        public IConfiguration Configuration { get; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}