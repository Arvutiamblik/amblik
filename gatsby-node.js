<<<<<<< HEAD


exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const result = await graphql(`
    {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/articles/"}}) {
          edges {
            node {
              id
              frontmatter {
                text
                slug
                lang
              }
            }
          }
        }
      }
    `);
    
   

    // TODO error handling
    const nodes = result.data.allMarkdownRemark.edges;
  
    
        nodes.forEach(page => {

        const urlBase = `/${page.node.frontmatter.lang}/`; 
        createPage({
          path: `${urlBase}${page.node.frontmatter.slug}/`,
          component: require.resolve('./src/templates/articles.js'),
          
          context: {
            
            text: page.node.frontmatter.text
          }
        });
      });
      
  
  
  }



  
  
=======
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
>>>>>>> parent of d86c31f... automatic pages
