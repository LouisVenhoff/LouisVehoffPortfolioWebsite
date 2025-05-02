using portfolio_backend.Models;
using portfolio_backend.Data;

namespace portfolio_backend.Services{

    public class RepoUpdateService{
        
        private IServiceScopeFactory _scopeFactory;

        public RepoUpdateService(IServiceScopeFactory scopeFactory){
            this._scopeFactory = scopeFactory;
        }

        public void StartUpdate(){
            Task.Run(async () => {
                using(var scope = _scopeFactory.CreateScope()){
                    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                    var items = await dbContext.Repositorys.ToListAsync();

                    Repository repo = new Repository{
                        Name = "Random Repo" 
                    };

                    dbContext.Repositorys.Add(repo);
                    await dbContext.SaveChangesAsync();
                }

            });
        }
    }


}