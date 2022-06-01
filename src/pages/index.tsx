import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import dogGif from "../images/dog.gif"

const IndexPage = ({ data }: any) => {
  const {
    dogImage,
    dogImageConstrained100,
    dogImageFixed100,
    dogImageFullWidth100,
    allWriterJson: { nodes: writers },
  } = data

  return (
    <Layout>
      <h1>そのまま表示編</h1>
      <h2>static フォルダに配置</h2>
      <img src="/logo.png" />
      <hr />

      <h2>import して表示</h2>
      <img src={dogGif} />
      <hr />

      <h1>gatsby-plugin-image 編</h1>
      <h2>StaticImage で表示</h2>
      <StaticImage src="../images/dog.svg" alt="dog.svg" />
      <StaticImage
        src="https://placehold.jp/38/ccc/999/250x250.jpg?text=No%20Image"
        alt="No Image"
      />
      <hr />

      <h2>GatsbyImage で表示</h2>
      <h3>file を使った表示</h3>
      <GatsbyImage image={getImage(dogImage)!} alt="dog.jpg" />
      <hr />

      <h3>childImageSharp で非対応フォーマット（gif,svg 等）の場合</h3>
      <img src={dogImage.publicURL} />
      <hr />

      <h3>
        gatsbyImageData(layout: CONSTRAINED, width: 100, height: 100)の場合
      </h3>
      <GatsbyImage image={getImage(dogImageConstrained100)!} alt="dog.jpg" />
      <hr />

      <h3>gatsbyImageData(layout: FIXED, width: 100, height: 100)の場合</h3>
      <GatsbyImage image={getImage(dogImageFixed100)!} alt="dog.jpg" />
      <hr />

      <h3>gatsbyImageData(layout: FIXED, width: 100, height: 100)の場合</h3>
      <GatsbyImage image={getImage(dogImageFullWidth100)!} alt="dog.jpg" />
      <hr />

      <h1>Json から画像データを扱う編</h1>
      <h2>Json からローカル画像を表示</h2>
      {writers.map((writer: any) => (
        <div>
          {writer.name}
          <GatsbyImage image={getImage(writer.image)!} alt={writer.name} />
        </div>
      ))}
      <h2>Json から外部画像を表示（placehold.jpを使用）</h2>
      {writers.map((writer: any) => (
        <div>
          {writer.name}
          <GatsbyImage image={getImage(writer.localImage)!} alt={writer.name} />
          <hr />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query Query {
    dogImage: file(relativePath: { eq: "dog.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData
      }
    }
    dogImageConstrained100: file(relativePath: { eq: "dog.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 100, height: 100)
      }
    }
    dogImageFixed100: file(relativePath: { eq: "dog.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 100, height: 100)
      }
    }
    dogImageFullWidth100: file(relativePath: { eq: "dog.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, width: 100, height: 100)
      }
    }
    allWriterJson {
      nodes {
        name
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        localImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default IndexPage
