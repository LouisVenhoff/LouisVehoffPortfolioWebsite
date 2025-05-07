using portfolio_backend.Models;
using portfolio_backend.Data;
using portfolio_backend.Lib;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System.Threading.Tasks;

namespace portfolio_backend.Services{

    public class RepoUpdateService{
        
        private IServiceScopeFactory _scopeFactory;

        public RepoUpdateService(IServiceScopeFactory scopeFactory){
            this._scopeFactory = scopeFactory;
        }

        public void StartUpdate(){
            Task.Run(async () => {
                
                using var scope = _scopeFactory.CreateScope();
                var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                var items = await dbContext.Repositorys.ToListAsync();

                List<Repository> repoList = await GithubApi.FetchRepositorys();
                try{
                    foreach(Repository repo in repoList){
                        Repository? foundRepo = dbContext.Repositorys.SingleOrDefault(r => r.Name == repo.Name);

                        if(foundRepo == null){
                            dbContext.Add(repo);
                        }
                    }
                }
                catch(Exception ex){
                    Console.WriteLine(ex.Message);
                }

                await dbContext.SaveChangesAsync();

                await PullRepositorys();
            });
        }

        private async Task PullRepositorys(){
            using var scope = _scopeFactory.CreateScope();
            var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            var items = await dbContext.Repositorys.ToListAsync();

            if(Directory.Exists("/var/portfolio") == false){
                Console.WriteLine("Creating folder for repositorys");
                DirectoryInfo dirInfo = Directory.CreateDirectory("/var/portfolio");
            }
            
            foreach(Repository repo in items){

            }
        }
    }


}