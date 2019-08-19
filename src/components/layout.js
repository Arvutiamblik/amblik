/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CMS from 'netlify-cms-app'

import PropTypes from "prop-types"
import "./layout.css"
import App from "../cms/cms.js"
function Layout ({ children }) {
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
              {
                label: data.allSitePage.nodes[0].path,
                name: 'test',
                widget: 'string'
              }
            ]
          }
        ]
      }
    })
  }, [data])

  return (

    <main>{children}</main>
)
}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
