import { createHttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: createHttpLink({uri: "http://localhost:8000/graphql", credentials: 'include'}),
    cache: new InMemoryCache({
            addTypename: false
    })
});
class dataService {
    async fetchData(){
    return await client.query({
        query: gql`query FETCH_DATA{
            allSitePage {
                nodes {
                  path
                }
         }`,
     });
 }}

var data =   dataService.fetchData();
console.log(data)