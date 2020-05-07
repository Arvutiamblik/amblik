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

const Layout = ({ lang, children, uid="", supportModal }) => {
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const [onTop, setOnTop] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      const isOnTop = currPos.y > -200
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
      if (isOnTop !== onTop) setOnTop(isOnTop)
    },
    [hideOnScroll, onTop],
    null,
    false,
    300
  )

  return (
    <main>
      <div className="bg-corners"></div>
      <Menu 
        lang={lang} 
        uid={uid} 
        supportModal={supportModal} 
        show={hideOnScroll} 
        top={onTop}
      />
      {children}
    </main>
  )
}
 
export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
