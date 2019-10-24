import React from "react"
import Layout from "../components/layout"
import TextCard from '../components/textCards'
import blog from '../images/free.jpg'
export const BlogPageTemplate = ({

    TextCards

   }) => (
  <Layout>
      <div class="container">

      <h1 id="logo"><big><strong>amblik </strong></big>. <em><small>ee</small></em></h1>
    <a href="#" id="link_button"><strong>SHOP</strong></a>
    <a href="#" id="link_button"><strong>SHOP</strong></a>
    <a href="#" id="link_button"><strong>SHOP</strong></a>
    <a href="#" id="link_button"><strong>SHOP</strong></a>
    <button id="support" type="button" className="btn btn-primary"><strong>SUPPORT</strong></button>
    <a href="#" id="language"><strong>eng</strong></a>
    <div class="main">
    <h1 id="blogHeader">Blog Test</h1>
    <p id="BlogDate">24.09.2019</p>
    <hr class="new1"></hr><br/>
    </div>
    <p id="BlogText"><img src={blog} alt="blog" class="rightimg"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div className="text-md-center col-lg">
    <h1>Järgmine lugu</h1>
    </div>
    <TextCard gridItems={TextCards.TextCard} />

    </div>
  </Layout>
  )


  const BlogPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return (
      <Layout>
        <BlogPageTemplate TextCards={frontmatter.TextCards} />
      </Layout>
    )
  }
  export const pageQuery = graphql`
query BlogPage {
  markdownRemark (frontmatter: { Identifier_field: { eq: "mainPageEt" }}){
    id
    frontmatter {
      TextCards {
        TextCard {
          button
          description
          title
        }
      }

  }
}}`
  

 
export default BlogPage