# Gatsby.js での画像処理攻略

Gatsby.js って日本語の参考記事少ないですよね。とくに画像周りはサンプルソースが少ないのでけっこう苦戦しました。そこで、自分が試行錯誤して辿り着いた Gatsby.js での画像の扱い方法をこの記事でまとめてみます。参考になれば幸いです

## 検証環境

- Gatsby 4.15.0
- React 17.0.1
- typescript 4.6.4
- gatsby-plugin-image 2.15
- gatsby-plugin-sharp 4.15

### はじめに

初見で Gatsby.js を触ることはオススメしません。まずは GraphQL と React からの学習推奨です！結果的にその方が近道になると思います。（過去の自分へ伝えたい）

- GraphQL の基本（type、field、resolver の作成方法）
- React（できれば Next.js）で簡単なアプリ作成

以上の点を踏まえて記事をどうぞ

# そのまま表示編

## static フォルダに配置

そのままの画像を使用したい場合は、プロジェクトのルートディレクトリに`static`フォルダを作成し、そこに画像を配置するだけです。favico.ico なんかを使用するのに便利です。

```
├── src
├── static
│   └── logo.png
```

```jsx
<img src="/logo.png" />
```

https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/

## import して表示

src/pages/index.tsx

```jsx
import * as React from "react"
import dogJpg from "../images/dog.jpg"

const IndexPage = () => {
  return (
    <main>
      <img src={dogJpg} />
    </main>
  )
}

export default IndexPage
```

import する際、型エラーになるので`image.d.ts`を作っておくと良いです

src/types/image.d.ts

```ts
declare module "*.jpg"
declare module "*.png"
declare module "*.gif"
```

https://www.gatsbyjs.com/docs/how-to/images-and-media/importing-assets-into-files/

# gatsby-plugin-image 編

https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/

#### 初期設定

公式を参考に設定  
https://www.gatsbyjs.com/plugins/gatsby-plugin-image/

```
yarn add gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp
```

`gatsby-config.js`に追記

```js
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
}
```

## StaticImage で表示

こんな感じで画像ファイルが配置されているとして

```
src
├── images
│   ├── dog.gif
│   ├── dog.jpg
│   ├── dog.png
│   └── dog.svg
├── pages
│   ├── 404.tsx
│   └── index.tsx
```

ソースファイルから見た相対パスを指定することで表示できます

src/pages/index.tsx

```jsx
<StaticImage src="../images/dog.jpg" alt="dog" />
```

外部 URL も可能です

```jsx
<StaticImage
  src="https://placehold.jp/38/ccc/999/250x250.jpg?text=No%20Image"
  alt="No Image"
/>
```

#### ポイント

- graphql で取得してきた動的な値を src として設定するといった事が出来ません

https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#restrictions-on-using-staticimage

## GatsbyImage で表示

#### 初期設定

まずは graphql で`src/images`以下のファイルを扱えるように gatsby-config に下記を追加します

gatsby-config.ts

```js
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    }
    ...
  ],
```

GatsbyImage の使い方は基本的にこんな感じ

```jsx
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }: any) => {
  const { dogImage } = data

  return (
    <main>
      <GatsbyImage image={getImage(dogImage)!} alt={'dog'} />
    </main>
  )
}

export const query = graphql`
  query Query {
    dogImage: file(relativePath: { eq: "dog.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default IndexPage
```

#### ポイント

- GatsbyImage を使う場合は、基本的に graphql を使用する必要があります
- gatsbyImageData に渡す width,height は表示する画像サイズを指定しているだけで、リサイズされる訳ではありません。この width,height の使い方については後ほど解説します
- childImageSharp では jpeg,jpg,png,webp,tif,tiff のフォーマットしか扱えない点も注意が必要です

https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#gatsbyimage

### childImageSharp で非対応フォーマット（gif,svg 等）の画像を表示したい場合

この場合は`childImageSharp`が null で返ってくるので`publicURL`を使用する必要があります

```jsx
import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }: any) => {
  const { dogImage } = data

  return (
    <main>
      <img src={dogImage.publicURL} />
    </main>
  )
}

export const query = graphql`
  query Query {
    dogImage: file(relativePath: { eq: "dog.gif" }) {
      publicURL
    }
  }
`

export default IndexPage
```

### meta タグ等 graphql で取得した画像データを設定したい場合

Gatsby.js で meta タグを設定する場合は、まず`Helmet`を設定する必要があります

#### 初期設定

公式を参考に設定  
https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/

```
yarn add gatsby-plugin-react-helmet react-helmet
yarn add -D @types/react-helmet
```

`gatsby-config.ts`の plugins に追加。ついでに`siteMetadata`も設定します

```ts
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `gatsby-example`,
    siteDescription: `gatsbyの実例サイトです`,
    siteUrl: `http://localhost:8000`,
    plugins: [
      `gatsby-plugin-react-helmet`
      〜
  },
```

#### graphql から取得した画像データから src を取得

単純に`getSrc`を使うと GatsbyImageData から src を取り出せます。リサイズしたい場合は`resize`を使うことも可能です。ただ、本来表示したいサイズに合わせた画像を用意して GatsbyImageData から取得した方が良いです（自動で srcset の設定を行なってくれるため）

```jsx
import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

const IndexPage = ({ data }: any) => {
  const {
    site: {
      siteMetadata: { siteUrl, siteTitle, siteDescription },
    },
    siteOgImage,
    siteIcon,
  } = data

  const siteIconUrl = siteUrl + getSrc(siteIcon)
  const siteOgImageUrl = siteUrl + siteOgImage.childImageSharp.resize.src

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription}></meta>
        <meta name="thumbnail" content={siteOgImageUrl}></meta>
        <meta property="og:title" content={siteTitle}></meta>
        <meta property="og:description" content={siteDescription}></meta>
        <meta property="og:image" content={siteOgImageUrl}></meta>
        <link rel="apple-touch-icon" href={siteIconUrl}></link>
      </Helmet>
      <main></main>
    </>
  )
}

export const query = graphql`
  query Query {
    site {
      siteMetadata {
        siteUrl
        siteTitle
        siteDescription
      }
    }
    siteIcon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    siteOgImage: file(relativePath: { eq: "og_image.png" }) {
      childImageSharp {
        resize(width: 1200, height: 630, toFormat: PNG) {
          src
        }
      }
    }
  }
`

export default IndexPage
```

## GatsbyImageData について

### GatsbyImageData に渡す width,height は一体何なのか？

この width,height は表示する画像サイズを指定します。そうすることで最適な srcset 用の画像を用意してくれるようになります。

たとえばですが 512x512 のアイコン画像があるとして`width: 100`、`height: 100`を指定すると

src/pages/index.tsx

```jsx
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const IndexPage = ({ data }: any) => {
  const { siteIcon } = data

  return (
    <Layout>
      <GatsbyImage image={getImage(siteIcon)!} alt="site_icon" />
    </Layout>
  )
}

export const query = graphql`
  query Query {
    siteIcon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        gatsbyImageData(width: 100, height: 100)
      }
    }
  }
`

export default IndexPage

```

出力される img タグがこんな感じになります。（一部省略）

```html
<img
  width="100"
  height="100"
  data-main-image=""
  style="object-fit: cover; opacity: 1"
  sizes="(min-width: 100px) 100px, 100vw"
  decoding="async"
  loading="lazy"
  src="/static/53aa06cf17e4239d0dba6ffd09854e02/15e42/icon.png"
  srcset="
    /static/53aa06cf17e4239d0dba6ffd09854e02/88208/icon.png  25w,
    /static/53aa06cf17e4239d0dba6ffd09854e02/e9fba/icon.png  50w,
    /static/53aa06cf17e4239d0dba6ffd09854e02/15e42/icon.png 100w,
    /static/53aa06cf17e4239d0dba6ffd09854e02/5aead/icon.png 200w
  "
  alt="site_icon"
/>
```

`src`として表示される画像は 100x100 ですが`srcset`に

- 25w には 25x25 の画像
- 50w には 50x50 の画像
- 100w には 100x100 の画像
- 200w には 200x200 の画像

と表示する端末に合わせた最適な画像ファイルを生成してくれます！

このように srcset に `0.25倍`,`0.5倍`,`1倍`,`2倍`の画像を用意してくれますが、これは gatsbyImageData に渡す引数の`layout`と`outputPixelDensities`によって決まります。

そして gatsbyImageData のデフォルト引数が下記のため 4 種類の画像が生成されます。

- layout: CONSTRAINED
- outputPixelDensities: [0.25, 0.5, 1, 2] # これは constrained の場合。fixed の場合は [1, 2]

https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#all-options

`srcset`と`sizes`についてはこちらの記事が非常に参考になります。  
https://qiita.com/dowanna6/items/b9e132b4c56e67491027

ちなみに`layout: FULL_WIDTH`の場合はこのように表示されます。（4096x4096 の icon_bg.png）

```graphql
query Query {
  siteIcon: file(relativePath: { eq: "icon_bg.png" }) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
```

```html
<img
  width="1"
  height="1"
  data-main-image=""
  style="object-fit: cover; opacity: 1"
  sizes="100vw"
  decoding="async"
  loading="lazy"
  src="/static/7ca970e4208ddbc81050244829d08250/7d307/icon_bg.png"
  srcset="
    /static/7ca970e4208ddbc81050244829d08250/f054e/icon_bg.png  750w,
    /static/7ca970e4208ddbc81050244829d08250/ae1c8/icon_bg.png 1080w,
    /static/7ca970e4208ddbc81050244829d08250/d41bd/icon_bg.png 1366w,
    /static/7ca970e4208ddbc81050244829d08250/7d307/icon_bg.png 1920w
  "
  alt="site_icon"
/>
```

デフォルトの`breakpoints: [750, 1080, 1366, 1920]`に合わせた srcset が生成されます

**この時の注意点としては、`layout: FULL_WIDTH`を指定すると width,height が無視されます**

### GatsbyImageData に渡す width,height を指定しないとどうなる？

たとえば width,height を指定しなかったり、元画像以上の width,height を指定すると

width,height を指定しない

```graphql
query Query {
  siteIcon: file(relativePath: { eq: "icon.png" }) {
    childImageSharp {
      gatsbyImageData
    }
  }
}
```

```html
<img
  width="512"
  height="512"
  data-main-image=""
  style="object-fit: cover; opacity: 1"
  sizes="(min-width: 512px) 512px, 100vw"
  decoding="async"
  loading="lazy"
  src="/static/53aa06cf17e4239d0dba6ffd09854e02/ccc41/icon.png"
  srcset="
    /static/53aa06cf17e4239d0dba6ffd09854e02/bf8e1/icon.png 128w,
    /static/53aa06cf17e4239d0dba6ffd09854e02/acb7c/icon.png 256w,
    /static/53aa06cf17e4239d0dba6ffd09854e02/ccc41/icon.png 512w
  "
  alt="site_icon"
/>
```

元画像以上の width,height を指定

```graphql
query Query {
  siteIcon: file(relativePath: { eq: "icon.png" }) {
    childImageSharp {
      gatsbyImageData(width: 1000, height: 1000)
    }
  }
}
```

```html
<img
  width="1000"
  height="1000"
  data-main-image=""
  style="object-fit: cover; opacity: 1"
  sizes="(min-width: 512px) 512px, 100vw"
  decoding="async"
  loading="lazy"
  src="/static/53aa06cf17e4239d0dba6ffd09854e02/ccc41/icon.png"
  srcset="
    /static/53aa06cf17e4239d0dba6ffd09854e02/bf8e1/icon.png 128w,
    /static/53aa06cf17e4239d0dba6ffd09854e02/acb7c/icon.png 256w,
    /static/53aa06cf17e4239d0dba6ffd09854e02/ccc41/icon.png 512w
  "
  alt="site_icon"
/>
```

結果、最大値となる元画像サイズ（512x512）に合わせた srcset が用意されます

**この時の注意点として、元画像よりも大きいサイズを指定してもリサイズされた画像は生成してくれないということです。**

まとめると

- 表示したい画像のサイズが決まっている場合は`layout: FIXED`で width,height を指定し、その 2x の画像（Retina 用）を用意する
- 汎用的に使いたい場合は`layout: CONSTRAINED`（デフォルト）で、表示する画像サイズの 2x の画像を用意しておくと良い
- キービジュアルや、背景画像といった大きな画像を使用する場合は`layout: FULL_WIDTH`を指定し、breakpoints の最大値 （breakpoints のデフォルト最大値が 1920px）の画像を用意しておくと良い

# Json から画像データを扱う編

#### 初期設定

公式を参考に設定  
https://www.gatsbyjs.com/plugins/gatsby-transformer-json/

```
yarn add gatsby-transformer-json
```

`gatsby-config.js`に追記

```
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
```

### Json からローカル画像を表示

Json から画像を扱いたい場合は単純にその json ファイルから見た画像ファイルへの相対パスを設定すると自動的に File へと変換されます

```
src
├── data
│   └── writer.json
├── images
│   ├── cat.png
│   ├── dog.gif
│   ├── dog.jpg
│   ├── dog.png
│   ├── dog.svg
│   └── koala.png
```

src/data/writer.json

```json
[
  {
    "id": 1,
    "name": "ねこライター",
    "image": "../images/cat.png"
  },
  {
    "id": 2,
    "name": "いぬライター",
    "image": "../images/dog.png"
  },
  {
    "id": 3,
    "name": "コアライター",
    "image": "../images/koala.png"
  }
]
```

src/pages/index.tsx

```jsx
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }: any) => {
  const {
    allWriterJson: { nodes: writers },
  } = data

  return (
    <main>
      {writers.map((writer: any) => (
        <div>
          {writer.name}
          <GatsbyImage image={getImage(writer.image)!} alt={writer.name} />
        </div>
      ))}
    </main>
  )
}

export const query = graphql`
  query Query {
    allWriterJson {
      nodes {
        name
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default IndexPage
```

### Json から外部画像を表示

基本的には公式を参考に作成します  
https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/

まずは graphql で追加の field を作成する必要があります

#### ポイント

- character〜のエラーが出たら encodeURI を指定しておくと良いです
- ビルドが永遠に終わらないことがないように、httpHeaders にタイムアウトを設定しておくと良いです

gatsby-node.js

```js
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type WriterJson implements Node {
      localImage: File @link(from: "fields.localFile")
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (node.internal.type === "WriterJson" && node.image_url) {
    const fileNode = await createRemoteFileNode({
      url: encodeURI(node.image_url), // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      getCache,
      httpHeaders: {
        timeout: 10000, // 10秒
      },
    })
    // if the file was created, extend the node with "localFile"
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id })
    }
  }
}
```

あとは単純に追加した`localImage`が File として扱えるので graphql から取得するだけです！

src/pages/index.tsx

```jsx
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }: any) => {
  const {
    allWriterJson: { nodes: writers },
  } = data

  return (
    <main>
      {writers.map((writer: any) => (
        <div>
          {writer.name}
          <GatsbyImage image={getImage(writer.localImage)!} alt={writer.name} />
          <hr />
        </div>
      ))}
    </main>
  )
}

export const query = graphql`
  query Query {
    allWriterJson {
      nodes {
        name
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
```

### おわりに

以上、Gatsby.js の画像攻略記事でした。自分もまだ分かっていない部分や間違っている箇所もあるかと思うので、その場合はコメントいただけると。

あとは`withArtDirection`の使い方も検証しようと思ったんですが、いまいち分からなかったのでそのうち追記したいと思います。

#### Gatsby.js を触って感じたメリット

- React の豊富なライブラリを使えるため、リッチな web アプリを作れる
- 簡単に web での画像表示を最適化できる
- GraphQL のスキーマをカスタマイズしていけば、柔軟なデータの持ち方ができるため、複雑なページも作れると思った。

#### Gatsby.js を触って感じたデメリット

- 学習コストが高い
- 起動が遅い。検証用に作った簡単な PJ の起動`yarn run develop`でも 30 秒くらいかかる。（CI からのデプロイもそれくらい）
- 生成される DOM の量が多くなりがち。（GatsbyImage を使うと、 noscript タグを使用した記述も生成するため、DOM の量が異常に増える。無効にする設定を探したところ無さそう？）

サンプルサイトも作成したので、よければ参考にしてください

ソース  
https://github.com/okdyy75/gatsby-example

Gatsby 実例サイト  
https://github.com/okdyy75/gatsby-example/tree/v1.0
