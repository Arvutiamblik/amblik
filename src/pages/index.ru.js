import { IndexPageTemplate } from './index'
import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
//rebuilt
const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return (
      <Layout>
        <IndexPageTemplate
           intro={frontmatter.intro}
           TextCards={frontmatter.TextCards}
           TopDescription={frontmatter.TopDescription}
           heading={frontmatter.heading}
           img={frontmatter.img}
        />
      </Layout>
    )
  }
  
  export const pageQuery = graphql`
  query IndexPageRu {
    markdownRemark (frontmatter: { lang: { eq: "ru" }}){
      id
      frontmatter {
        TextCards {
          TextCard {
            button
            description
            title
          }
        }
        intro {
          blurbs {
            blockDescription
            blockHeading
            buttonPlaceholder
          }
        }
        TopDescription {
          topText
          topButton
        }
        heading
        img
    }
  }}`
  export default IndexPage