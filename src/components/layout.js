/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Menu from "./menu.js"
 
const Layout = ({ lang, children, uid="", supportModal }) => {
  return (
    <main className="bg-corners">
      <Menu lang={lang} uid={uid} supportModal={supportModal} />
      {children}
    </main>
  )
}
 
export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
