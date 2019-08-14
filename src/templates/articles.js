import React from "react"
import Layout from "../components/layout"
const Page = ({pageContext}) => (
  <Layout>
      <p>{pageContext.text}</p>
  </Layout>
)
export default Page