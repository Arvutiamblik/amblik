
var fs = require('fs');
exports.onPostBuild = async ({ graphql }) => {
  const pages = await graphql(`
  {
    allSitePage {
      nodes {
        path
      }
    }
    }
  `);
  fs.writeFile("./test.json", JSON.stringify(pages, null), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
};
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



  
  