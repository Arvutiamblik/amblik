module.exports = {
  siteMetadata: {
    title: `Amblik`,
    description: `pilvelahendused, IT haldus, IT-süsteemide projekteerimine ja hooldus, arvutivõrgud, infoturve, varundus-süsteemid, kasutajatugi, Business Intelligence, kodulehekülgede ja e-poodide arendus ja tugi, majandustarkvara arendus, Office 365, Microsoft 365, Azure, Power BI, Linux, ESET, AVAST, LetSignit, Keeper.`,
    author: `@gatsbyjs`,
    siteUrl: `https://peaceful-minsky-c75cd0.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `UA-119752018-3`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: [`/preview/**`, `/do-not-track/me/too/`],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,

        defer: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-P27DLKQ`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Amblik`,
        start_url: `/`,
        background_color: `#00008b`,
        theme_color: `#00008b`,
        display: `minimal-ui`,
        icon: `src/images/amblik-favicon.png`,
        icons: [
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `icons/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: `amblik`, // (REQUIRED, replace with your own)
        path: `/preview`,
        previews: false,
        omitPrismicScript: true,
        shortenUrlLangs: true,
        defaultLang: `et-et`,
        langs: [`et-et`, `ru`, `en-us`],
        pages: [
          {
            type: `Home_page`,
            match: `/:lang?/`,
            path: `/home-prewview`,
            component: require.resolve(`./src/templates/index.js`),
          },
          {
            type: `Article`,
            match: `/:lang?/:uid`,
            path: `/article`,
            component: require.resolve(`./src/templates/article.js`),
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
    `gatsby-plugin-optimize-svgs`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [
          {
            userAgent: `Googlebot`,
            allow: `/`,
            disallow: [`/preview`, `/home-prewview`],
            crawlDelay: 2,
          },
          {
            userAgent: `OtherBot`,
            allow: [`/allow-for-all-bots`, `/allow-only-for-other-bot`],
            disallow: [`/preview`, `/home-prewview`],
            crawlDelay: 2,
          },
          {
            userAgent: `*`,
            allow: `/`,
            disallow: [`/preview`, `/home-prewview`],
            crawlDelay: 10,
            cleanParam: `ref /articles/`,
          },
        ],
      },
    },
  ],
};
