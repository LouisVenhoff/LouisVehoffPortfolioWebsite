import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const graphQLClient = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
})


createRoot(document.getElementById('root')!).render(    
    <ChakraProvider value={defaultSystem}>
        <ApolloProvider client={graphQLClient}>
            <App />
        </ApolloProvider>
    </ChakraProvider>
);
