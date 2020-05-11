module.exports = {
  siteMetadata: {
    title: `Amblik`,
    description: `pilvelahendused, IT haldus, IT-süsteemide projekteerimine ja hooldus, arvutivõrgud, infoturve, varundus-süsteemid, kasutajatugi, Business Intelligence, kodulehekülgede ja e-poodide arendus ja tugi, majandustarkvara arendus, Office 365, Microsoft 365, Azure, Power BI, Linux, ESET, AVAST, LetSignit, Keeper.`,
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
       path: '/preview',
       previews: true,

        shortenUrlLangs: true,
        defaultLang: 'et-et',
        langs: ['et-et', 'ru'],
        pages: [{
          type: 'Home_page',
          match: '/:lang?/',
          path: '/home-prewview',
          component: require.resolve('./src/templates/index.js'),
          
        },
        {
          type: 'Article',
          match: '/:lang?/:uid',
          path: '/article',
          component: require.resolve('./src/templates/article.js')
        },
   ],
       
       
    }
  },
  
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  
 `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
    'gatsby-plugin-optimize-svgs',
  ],
}