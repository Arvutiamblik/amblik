import React from "react"
import Layout from "../components/layout"
import TextCard from '../components/textCards'
export const BlogPageTemplate = ({

    TextCards,
    BlogCards

   }) => (
  <Layout>
      <div className="container">

    

  
    
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
    
    return (
      <Layout>
        <BlogPageTemplate 
        BlogCards={data.prismic.edges[0].node.blog} 
        TextCards={data.prismic.edges[0].node.textcards}
        />
      </Layout>
    )
  }
  export const pageQuery = graphql`
query BlogPage {
    prismic {
        allBlogs {
          edges {
            node {
             
              blog {
                title
                text
                date_published
              }
              textcards {
                button
                description
                title
              }
            }
          }
        }
      }
}`
  

 
export default BlogPage