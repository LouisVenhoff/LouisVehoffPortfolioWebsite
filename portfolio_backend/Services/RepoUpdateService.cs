using portfolio_backend.Models;
using portfolio_backend.Data;
using portfolio_backend.Lib;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System.Threading.Tasks;
using GitRepo = LibGit2Sharp.Repository;
using Git = LibGit2Sharp;

namespace portfolio_backend.Services{

    public class RepoUpdateService{
        
        private IServiceScopeFactory _scopeFactory;

        private LibGit2SharpWrapper gitWrapper;

        public RepoUpdateService(IServiceScopeFactory scopeFactory){
            this._scopeFactory = scopeFactory;

            this.gitWrapper = new LibGit2SharpWrapper("github PAT");
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

            
            try{
                if(Directory.Exists("/var/portfolio") == false){
                    Console.WriteLine("Creating folder for repositorys");
                    DirectoryInfo dirInfo = Directory.CreateDirectory("/var/portfolio");
                }
            
                foreach(Repository repo in items){
                    if(Directory.Exists($"/var/portfolio/{repo.Id}")){
                        Console.WriteLine($"Pulling: {repo.Name}");
                        //this.gitWrapper.Pull($"/var/portfolio/{repo.Id}");
                    }
                    else{
                        Console.WriteLine("Git here!");
                        if(repo.Name == "aircraft") continue;

                        Console.WriteLine($"Cloning: {repo.Name}");
                        this.gitWrapper.Clone(repo.CloneLink, $"/var/portfolio/{repo.Id}");
                    }
                }
            }catch(Exception e){
                Console.WriteLine($"There was an Error! {e.Message}");
            }
            
            
        }
    }


}