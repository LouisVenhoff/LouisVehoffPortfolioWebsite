

using LibGit2Sharp;
using Microsoft.EntityFrameworkCore.ValueGeneration.Internal;
using NuGet.Protocol.Plugins;

namespace portfolio_backend.Lib;

class LibGit2SharpWrapper{

    private Credentials credentials;

    private CloneOptions cloneOptions;

    private FetchOptions fetchOptions;

    private string githubToken;



    public LibGit2SharpWrapper(string githubToken){

        this.githubToken = githubToken;

        this.credentials = GetCredentials(this.githubToken);

        this.fetchOptions = new FetchOptions{
            CredentialsProvider= (_url, _user, _cred) => this.credentials
        };

        this.cloneOptions = new CloneOptions(this.fetchOptions);
    }

    public void Clone(string cloneUrl, string targetFolder){
        Repository.Clone(cloneUrl, targetFolder, this.cloneOptions);

        Repository repo = new Repository(targetFolder);

        this.Checkout(repo);
    }

    public bool Checkout(Repository repo){
        try{
            var remoteBranch = repo.Branches["origin/docs"];
            Branch localBranch = repo.Branches["docs"];

            if(remoteBranch == null) return false;
            
            if(localBranch == null){
                localBranch = repo.CreateBranch("docs", remoteBranch.Tip);
                repo.Branches.Update(localBranch, b => b.TrackedBranch = remoteBranch.CanonicalName);
                Commands.Checkout(repo, "docs");
            }
            else{
                Commands.Checkout(repo, localBranch);
            }
        }
        catch(Exception ex){
            Console.WriteLine(ex.Message);
            return false;
        }
        
        return true;
    }

    public void Pull(string path){
        
        Repository repo = new Repository(path);
        
        PullOptions pullOptions = new PullOptions{
            
            FetchOptions = new FetchOptions{
                CredentialsProvider = (_, _, _) => GetCredentials(this.githubToken),
            },
            MergeOptions = new MergeOptions{
            FastForwardStrategy = FastForwardStrategy.FastForwardOnly
            }
        };
        
        Commands.Pull(repo, new Signature("auto_portfolio", "auto_portfolio@portfolio.net", DateTimeOffset.Now), pullOptions);

        this.Checkout(repo);
    }


    private static UsernamePasswordCredentials GetCredentials(string githubToken){
         return new UsernamePasswordCredentials{
            Username = "git",
            Password = githubToken
        };
    }


}