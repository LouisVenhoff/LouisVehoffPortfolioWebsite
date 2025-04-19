import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import {setContext} from "@apollo/client/link/context";
import useGithubApi from './hooks/useGithubApi.ts';

const graphQLClient = useGithubApi();


createRoot(document.getElementById('root')!).render(    
    <ChakraProvider value={defaultSystem}>
        <ApolloProvider client={graphQLClient}>
            <App />
        </ApolloProvider>
    </ChakraProvider>
);

