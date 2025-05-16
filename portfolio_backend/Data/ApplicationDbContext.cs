using Microsoft.EntityFrameworkCore;
using portfolio_backend.Models;
using portfolio_backend.Modles;

namespace portfolio_backend.Data{

    public class ApplicationDbContext : DbContext{

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base (options){

        }

        public DbSet<Repository> Repositorys {get; set;}

        public DbSet<Doc> Docs {get; set;}

    }

}