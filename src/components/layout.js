/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./layout.css";
import Menu from "./menu.js";
import { useScrollPosition } from "../utils/useScrollPosition";
import CookieBanner from "./CookieBanner";
import Footer from "./footer";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({
  lang,
  children,
  uid = "",
  supportModal,
  alternateLanguages,
}) => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [onTop, setOnTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y > 0 || prevPos.y > 0) return;
      const isShow = currPos.y > prevPos.y;
      const isOnTop = currPos.y > -100;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
      if (isOnTop !== onTop) setOnTop(isOnTop);
    },
    [hideOnScroll, onTop]
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  });

  const handleClick = () => {
    setOnTop(false);
    setMenuOpen(false);
  };

  return (
    <main>
      <div className="shape-left-up" alt="Menu shape"></div>
      <div className="shape-right-up" alt="Menu shape"></div>
      <Menu
        lang={lang}
        uid={uid}
        supportModal={supportModal}
        show={hideOnScroll}
        top={onTop}
        alternateLanguages={alternateLanguages}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        handleClick={handleClick}
      />
      <div className="wrapper content-padding">{children}</div>
      <CookieBanner lang={lang} />
      <Footer lang={lang} />
    </main>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
