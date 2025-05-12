
using System.Text.Json.Serialization;

namespace portfolio_backend.Exceptions;

[Serializable]
class GithubAuthException : Exception{

    public GithubAuthException(string message) : base(message){}

}