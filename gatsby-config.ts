import type { GatsbyConfig } from "gatsby"

const isProduction = process.env.NODE_ENV === 'production'

const config: GatsbyConfig = {
  pathPrefix: "/gatsby-example",
  siteMetadata: {
    siteTitle: `GatsbyExample`,
    siteDescription: `Gatsbyの実例サイトです`,
    siteUrl: isProduction ? 'https://okdyy75.github.io' : 'http://localhost:8000',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}

export default config
