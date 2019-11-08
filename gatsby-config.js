module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
       // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    
     `gatsby-plugin-offline`,
     
     
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    },
    {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: true, // Print removed selectors and processed file names
      // develop: true, // Enable while using `gatsby develop`
      // tailwind: true, // Enable tailwindcss support
      // whitelist: ['whitelist'], // Don't remove this selector
      // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
      // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    }
    
  },
  {
		resolve: 'gatsby-plugin-webpack-bundle-analyzer',
		options: {
			analyzerPort: 3000,
			production: true,
		},
  },
  {
    resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'amblik', // (REQUIRED, replace with your own)
        accessToken: 'MC5YYW13dEJBQUFDRUEwOVla.SUI6F1bvv73vv73vv73vv71t77-977-977-977-9HBbvv73vv73vv70n77-977-9WO-_ve-_ve-_ve-_vV_vv73vv73vv70F', // (optional API access token)
     
        omitPrismicScript: true
        //path: '/preview', // (optional preview path. Default: /preview)
       // previews: true, // (optional, activated Previews. Default: false)
        /*pages: [{ // (optional, builds pages dynamically)
        type: 'Article',         // TypeName from prismic
        match: '/article/:uid',  // Pages will be generated under this pattern
        path: '/article',        // Placeholder page for unpublished documents
        component: require.resolve('./src/templates/article.js'),
      }*,*/
    }
  },
  `gatsby-transformer-sharp`,
    'gatsby-plugin-optimize-svgs',
  ],
}
