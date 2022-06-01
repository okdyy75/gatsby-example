import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { getSrc } from "gatsby-plugin-image"
import { graphql, useStaticQuery, withPrefix } from "gatsby"

const Layout = ({
  children,
  title = "",
  description = "",
  ogImageUrl = "",
}: any) => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteUrl
            siteTitle
            siteDescription
          }
        }
        siteIcon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            gatsbyImageData(width: 180, height: 180, quality: 90)
          }
        }
        siteOgImage: file(relativePath: { eq: "og_image.png" }) {
          childImageSharp {
            resize(
              width: 1200
              height: 630
              toFormat: PNG
              pngQuality: 90
              cropFocus: CENTER
            ) {
              src
            }
          }
        }
      }
    `
  )

  const { href } = useLocation()
  const {
    site: {
      siteMetadata: { siteUrl, siteTitle, siteDescription },
    },
    siteIcon,
    siteOgImage,
  } = data

  const siteIconUrl = siteUrl + getSrc(siteIcon)
  const siteOgImageUrl = siteUrl +  withPrefix(siteOgImage.childImageSharp.resize.src)
  const canonicalUrl = href

  title = title || siteTitle
  description = description || siteDescription
  ogImageUrl = ogImageUrl || siteOgImageUrl

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="thumbnail" content={ogImageUrl}></meta>
        <link rel="icon" href={withPrefix('favicon.ico')} />
        <meta property="og:locale" content="ja_JP"></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:description" content={description}></meta>
        <meta property="og:image" content={ogImageUrl}></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <meta property="og:url" content={canonicalUrl}></meta>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta name="twitter:title" content={title}></meta>
        <meta name="twitter:description" content={description}></meta>
        <meta name="twitter:image" content={ogImageUrl}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <link rel="apple-touch-icon" href={siteIconUrl}></link>
        <link rel="apple-touch-icon" sizes="180x180" href={siteIconUrl}></link>
        <meta name="msapplication-TileImage" content={siteIconUrl}></meta>
        <meta name="robots" content="index,follow"></meta>
        <meta name="googlebot" content="index,follow"></meta>
        <link rel="canonical" href={canonicalUrl}></link>
      </Helmet>
      <main>{children}</main>
    </>
  )
}

export default Layout
