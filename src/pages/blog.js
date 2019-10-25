import React from "react"
import Layout from "../components/layout"
import TextCard from '../components/textCards'
import BlogCard from '../components/BlogText'
export const BlogPageTemplate = ({

    TextCards,
    BlogCards

   }) => (
  <Layout>
      <div className="container">

    

    <BlogCard gridItems={BlogCards.BlogCard} />
    <TextCard gridItems={TextCards.TextCard} />
    
    </div>
    <div className="text-md-center col-lg">
              <div id="low" className="text-md-center">
                <p>
                  Pöörduge julgelt ka väikeste it murede<br />puhul:</p>
                <div id="num" className="text-md-center">
                  <h1 id="num"><small><strong>+372 665 48 28</strong></small></h1>
                  <p><big>+372 5 096 244</big></p>
                  <h1 id="num"><small><strong>support@amblik.ee</strong></small></h1>
                </div></div></div>
  </Layout>
  )


  const BlogPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
    return (
      <Layout>
        <BlogPageTemplate 
        BlogCards={frontmatter.BlogCards} 
        TextCards={frontmatter.TextCards}
        />
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
      BlogCards {
        BlogCard {
          BlogTextCard
          BlogTime
          HeadText
        }
      }

  }
}}`
  

 
export default BlogPage