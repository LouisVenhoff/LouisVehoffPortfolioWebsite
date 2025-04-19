import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export default function useGithubApi(){
    const githubApiLink = createHttpLink({
        uri: "https://api.github.com/graphql",
    });
    
    const authLink = setContext(
        (_, { headers }) => {
            const token = "ABC";
    
            return {headers: {
                ...headers,
                authorization: `Bearer ${token}`
            }};
        }
    );
    
    
    const graphQLClient = new ApolloClient({
        link: authLink.concat(githubApiLink),
        cache: new InMemoryCache(),
    })

    return graphQLClient;
}