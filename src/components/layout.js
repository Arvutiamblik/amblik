/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useState } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Menu from "./menu.js"
import { useScrollPosition } from '../utils/useScrollPosition';
import shapeLeftUp from '../images/shape-left-up.png';
import shapeRightUp from '../images/shape-right-up.png';

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ lang, children, uid="", supportModal, alternateLanguages }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const [onTop, setOnTop] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      const isOnTop = currPos.y > -100
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
      if (isOnTop !== onTop) setOnTop(isOnTop)
    },
    [hideOnScroll, onTop]
  )

  return (
    <main>
      <div className="shape-left-up" alt="Menu shape" src={shapeLeftUp}></div>
      <div className="shape-right-up" alt="Menu shape" src={shapeRightUp}></div>
      <Menu 
        lang={lang} 
        uid={uid} 
        supportModal={supportModal} 
        show={hideOnScroll} 
        top={onTop}
        alternateLanguages={alternateLanguages}
      />
      <div className="wrapper content-padding">
        {children}
      </div>
    </main>
  )
}
 
export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
