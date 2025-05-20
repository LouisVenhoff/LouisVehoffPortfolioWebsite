using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Expressions;
using Newtonsoft.Json.Linq;
using NuGet.Packaging;
using portfolio_backend.Exceptions;
using portfolio_backend.Models;
using System.Net.Http.Headers;

namespace portfolio_backend.Lib{

    static class GithubApi {

        private static HttpClient client = new HttpClient();

        public static async Task<List<Repository>> FetchRepositorys(){
    
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", ReadAccessToken());
            client.DefaultRequestHeaders.UserAgent.Add(ProductInfoHeaderValue.Parse("LouisVenhoff"));
            
            HttpResponseMessage response = await client.GetAsync("https://api.github.com/user/repos?perPage=100&page=1");
            
            List<Repository> repositories = [];

            String rawJson = await response.Content.ReadAsStringAsync();

            foreach(JObject obj in JArray.Parse(rawJson)){
                if(obj["name"] == null) continue;

                repositories.Add(new Repository(obj["name"]!.ToString(), obj["clone_url"]!.ToString()));
            };

            return repositories;
        }

        private static String ReadAccessToken(){
            string? accessToken = Environment.GetEnvironmentVariable("GITHUB_ACCESS_TOKEN") ?? throw new GithubAuthException("GITHUB_ACCESS_TOKEN not found!");
            return accessToken;
        }


    }

}