/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import i18n from '../../config/i18n'
import { useStaticQuery, graphql, Link } from 'gatsby'
import corners from '../images/corners.svg'
import Menu from "./menu.js"
const LocaleContext = React.createContext()

const Layout = ({ children }) => {

  return (

        <main>
             <img id="corners" className="img" alt="background" src={corners} />
             <Menu />
        {children}
        </main>
  )
}

  export default Layout 
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

