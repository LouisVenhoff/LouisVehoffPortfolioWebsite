using Microsoft.EntityFrameworkCore;
using portfolio_backend.Models;

namespace portfolio_backend.Data{

    class ApplicationDbContext : DbContext{

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base (options){

        }

        public DbSet<Repository> Repositorys {get; set;}

    }

}