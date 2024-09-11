import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// GitHub Personal Access Token
const GITHUB_API_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api.github.com/graphql',
        headers: {
            authorization: `Bearer ${GITHUB_API_TOKEN}`,
        },
    }),
    cache: new InMemoryCache(),
});

export default client;
