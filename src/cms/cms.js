import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CMS from 'netlify-cms-app'
import IndexPagePreview from './preview-templates/IndexPagePreview'
CMS.registerPreviewStyle('../components/layout.css')
CMS.registerPreviewTemplate('main_page_et', IndexPagePreview)
export default function App () {
    const data = useStaticQuery(graphql`
      query {
        allSitePage {
          nodes {
            path
          }
        }
      }
    `)
    
    useEffect(() => {
      CMS.init({
        config: {
          load_config_file: true,
          collections: [
            {
              label: 'menu',
              name: 'menu',
              folder: 'src/content/menu',
              create: true,
              fields: [
                { label: 'slug', name: 'slug', widget: 'string' },
                { label: 'language code', name: 'lang', widget: 'string' },
                { label: 'Text', name: 'text', widget: 'string' },
                { label: data.allSitePage.nodes[0].path, name: 'test', widget: 'string' }
              ]
            }
          ]
        }
      })
    }, [data])
  
  }