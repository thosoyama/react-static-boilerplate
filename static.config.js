import path from 'path'
import React from 'react'
import fs from 'fs'

// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const items = JSON.parse(fs.readFileSync('./src/config/item.json', 'utf8'));

    return [
      {
        path: '/',
        getData: () => ({ items }),
        children: items.map((item) => ({
          path: `/item/${item.id}_${item.name}`,
          template: 'src/containers/Item',
          getData: () => ({ item }),
        })),
      },
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-styled-components',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="ja">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=0" />
        <meta name="keyword" content="react-static" />
        <meta name="description" content="react-static typescript boilerplate" />
        <title>React-Static Typescript Boilerplate</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
