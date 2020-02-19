import React from "react"
import Layout from "../components/layout"
import TextCard from '../components/textCards'
import blog from "../images/free.jpg"
export const BlogPageTemplate = ({

    TextCards,
    BlogCards,
    img

   }) => (
 <>
      <div className="container">
        <div className="main">
          <h1 id="blogHeader">Blog Test</h1>
          <p id="BlogDate">24.09.2019</p>
          <hr className="new1" /><br />
        </div>
        <p id="BlogText"><img src="{blog}" alt="blog" className="rightimg" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        <div className="text-md-center col-lg">
          <p id="blogNextHeader">Järgmine lugu</p>
        </div>
      </div>     
      <div id="low" className="text-md-center">
                <p>
                  Pöörduge julgelt ka väikeste it murede<br />puhul:</p>
                <div id="num" className="text-md-center">
                  <h1 id="num"><small><strong>+372 665 48 28</strong></small></h1>
                  <p><big>+372 5 096 244</big></p>
                  <h1 id="num"><small><strong>support@amblik.ee</strong></small></h1>
                </div></div>
  </>
  )


  const BlogPage = ({ data, pageContext, location }) => {
    
    return (
      <Layout
      pageLanguage={pageContext.siteLanguage} 
      languagePrefix={pageContext.languagePrefix}
      location={location}
      >
        <BlogPageTemplate 
      
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