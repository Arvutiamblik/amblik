/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {

  return (

        <main>
           <script data-jsd-embedded data-key="6e1408e1-c928-4138-a901-66dab20bc20e" data-base-url="https://jsd-widget.atlassian.com" src="https://jsd-widget.atlassian.com/assets/embed.js"></script>
        {children}</main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout