
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
  
    
     
      
  
  
  }



  
