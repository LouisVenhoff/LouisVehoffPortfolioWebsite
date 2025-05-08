

using LibGit2Sharp;

namespace portfolio_backend.Lib;

class LibGit2SharpWrapper{

    private Credentials credentials;

    private CloneOptions cloneOptions;

    private FetchOptions fetchOptions;


    public LibGit2SharpWrapper(string githubToken){

        this.credentials = new UsernamePasswordCredentials{
            Username = "git",
            Password = githubToken
        };

        this.fetchOptions = new FetchOptions{
            CredentialsProvider= (_url, _user, _cred) => this.credentials
        };

        this.cloneOptions = new CloneOptions(this.fetchOptions);
    }

    public string Clone(string cloneUrl, string targetFolder){
        return Repository.Clone(cloneUrl, targetFolder, this.cloneOptions);
    }


}