import React from "react"
import Layout from "../components/layout"
import TextCard from '../components/textCards'
export const BlogPageTemplate = ({

    TextCards,
    BlogCards

   }) => (
  <Layout>
      <div className="container">
        <h1 id="logo"><big><strong>amblik </strong></big>. <em><small>ee</small></em></h1>
        <a href="#" id="link_button"><strong>SHOP</strong></a>
        <a href="#" id="link_button"><strong>SHOP</strong></a>
        <a href="#" id="link_button"><strong>SHOP</strong></a>
        <a href="#" id="link_button"><strong>SHOP</strong></a>
        <button id="support" type="button" classname="btn btn-primary"><strong>SUPPORT</strong></button>
        <a href="#" id="language"><strong>eng</strong></a>
        <div className="main">
          <h1 id="blogHeader">Blog Test</h1>
          <p id="BlogDate">24.09.2019</p>
          <hr className="new1" /><br />
        </div>
        <p id="BlogText"><img src="{blog}" alt="blog" className="rightimg" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        <div classname="text-md-center col-lg">
          <h1 id="Zagolovok">Järgmine lugu</h1>
        </div>
      </div>     
          <footer id="low" >
                <p id="Zagolovok">
                  Pöörduge julgelt ka väikeste it murede<br />puhul:</p>
                <div id="num" className="text-md-center">
                  <h1 id="num"><small><strong>+372 665 48 28</strong></small></h1>
                  <p><big>+372 5 096 244</big></p>
                  <h1 id="num"><small><strong>support@amblik.ee</strong></small></h1>
                </div>
                </footer>
  </Layout>
  )


  const BlogPage = ({ data }) => {
    
    return (
      <Layout>
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