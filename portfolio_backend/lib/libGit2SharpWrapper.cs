

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

        this.credentials = LibGit2SharpWrapper.GetCredentials(this.githubToken);

        this.fetchOptions = new FetchOptions{
            CredentialsProvider= (_url, _user, _cred) => this.credentials
        };

        this.cloneOptions = new CloneOptions(this.fetchOptions);
    }

    public string Clone(string cloneUrl, string targetFolder){
        return Repository.Clone(cloneUrl, targetFolder, this.cloneOptions);
    }

    public bool Checkout(Repository repo){
        var branch = repo.Branches["docs"];

        if(branch == null) return false;

        Commands.Checkout(repo, branch);

        return true;
    }

    public void Pull(Repository repo){
        
        PullOptions pullOptions = new PullOptions{
            
            FetchOptions = new FetchOptions{
                CredentialsProvider = (_, _, _) => GetCredentials(this.githubToken),
            },
            MergeOptions = new MergeOptions{
            FastForwardStrategy = FastForwardStrategy.FastForwardOnly
            }
        };
        
        Commands.Pull(repo, new Signature("auto_portfolio", "auto_portfolio@portfolio.net", DateTimeOffset.Now), pullOptions);

    }


    private static UsernamePasswordCredentials GetCredentials(string githubToken){
         return new UsernamePasswordCredentials{
            Username = "git",
            Password = githubToken
        };
    }


}