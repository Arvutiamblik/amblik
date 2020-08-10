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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-119752018-3",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,

        defer: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-P27DLKQ",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00008b`,
        theme_color: `#00008b`,
        display: `minimal-ui`,
        icon: `src/images/amblik-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        analyzerPort: 3000,
        production: true,
      },
    },

    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "amblik", // (REQUIRED, replace with your own)
        path: "/preview",
        previews: true,

        shortenUrlLangs: true,
        defaultLang: "et-et",
        langs: ["et-et", "ru", "en"],
        pages: [
          {
            type: "Home_page",
            match: "/:lang?/",
            path: "/home-prewview",
            component: require.resolve("./src/templates/index.js"),
          },
          {
            type: "Article",
            match: "/:lang?/:uid",
            path: "/article",
            component: require.resolve("./src/templates/article.js"),
          },
        ],
      },
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
    "gatsby-plugin-optimize-svgs",
  ],
};
