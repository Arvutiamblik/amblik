import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CMS from 'netlify-cms-app'
import IndexPagePreview from './preview-templates/IndexPagePreview'
export default () => {
  const data = useStaticQuery(graphql`
     query menuQuery {
      allSitePage {
    nodes {
      path
    }
    }
    }
    `)
return (
   CMS.init({
    config: {
    load_config_file: true,
    collections: [
     { label: "menu", name: "menu", folder: "src/content/menu", create: true, fields: [
     { label: "slug", name: "slug", widget: "string"},
     { label: "language code", name: "lang", widget: "string"},
     { label: data.allSitePage.nodes[0].path, name: "test", widget: "string"},
    ]},
    ],
    
     
}
})
)
}


   
  
    
   


  





CMS.registerPreviewStyle('../components/layout.css')
CMS.registerPreviewTemplate('main_page_et', IndexPagePreview)
export const menuQuery = graphql`
query menuPage {
    allSitePage {
    nodes {
      path
    }
  }}`