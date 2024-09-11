"use client";

import { ApolloClient, ApolloProvider } from "@apollo/client";
import { GithubContribution } from "./GithubContributions";
import client from "@/lib/apollo/apollo-client";

export const GraphqlWrapper = () => {
    return (
        <ApolloProvider client={client}>
            <GithubContribution />
        </ApolloProvider>
    );
};