import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CMS from 'netlify-cms-app'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import { createHttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { useQuery } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
CMS.registerPreviewStyle('../components/layout.css')
CMS.registerPreviewTemplate('main_page_et', IndexPagePreview)


const client = new ApolloClient({
    link: createHttpLink({uri: "http://localhost:8000/___graphql", credentials: 'include'}),
    cache: new InMemoryCache({
            addTypename: false
    })
});

class dataService {
     async fetchData(){
        const result = await client.query({
            query: gql`query FETCH_DATA{
            allSitePage {
                nodes {
                  path
                }
            }
        }`})
        CMS.init({
            config: {
              backend: {
                name: 'github',
                repo: 'Arvutiamblik/amblik',
                branch: 'master'
              },
              load_config_file: false,
              media_folder: "static/images",
              public_folder: "/images",
              collections: [
                {
                  label: "menu",
                  name: "menu",
                  folder: "src/content/menu",
                  create: true,
                  fields: [
                    { label: "slug", name: "slug", widget: "string" },
                    { label: "language code", name: "lang", widget: "string" },
                    {
                      label: result.data.allSitePage.nodes[0].path,
                      name: "test",
                      widget: "string"
                    }
                  ]
                }
              ]
            }
          })
     
    }
              
                
       
        
}
   
     


var obj = new dataService();
console.log(obj.fetchData())



  