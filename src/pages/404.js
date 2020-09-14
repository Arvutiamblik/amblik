import React from "react";
import SEO from "../components/seo";
import { useEffect } from "react";
import { navigate } from "gatsby";

export default () => {
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
};
