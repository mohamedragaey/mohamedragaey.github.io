module.exports = {
  siteMetadata: {
    title: "Mohamed Ragaey portfolio",
    siteUrl: "https://mohamedragaey.me",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "trackingId",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
