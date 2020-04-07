module.exports = {
  siteUrl: 'http://arsfiqball.com/',
  siteName: 'Arsfiqball',
  icon: './src/icon.jpg',

  templates: {
    Single: '/:name',
    Portfolio: '/portfolio--:name',
    Post: '/post--:title',
    Tag: '/tag--:id'
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Single',
        path: 'content/pages/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Portfolio',
        path: 'content/portfolios/*.md'
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: 'Arsfiqball',
          description: 'Personal website of Iqbal Mohammad Abdul Ghoni. Software & electronics engineer, graphic designer and JS fanboy.',
          id: 'http://arsfiqball.com/',
          link: 'http://arsfiqball.com/',
          language: 'en',
          image: 'http://arsfiqball.com/me.jpg',
          favicon: 'http://arsfiqball.com/favicon.ico',
          copyright: 'All rights reserved 2020, Iqbal Mohammad Abdul Ghoni',
          feedLinks: {
            json: 'https://arsfiqball.com/feed.json',
            atom: 'https://arsfiqball.com/feed.atom'
          },
          author: {
            name: 'Iqbal Mohammad Abdul Ghoni',
            email: "iqballmags@gmail.com",
            link: "https://arsfiqball.com"
          }
        },
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: true,
          output: '/feed.atom'
        },
        json: {
          enabled: true,
          output: '/feed.json'
        },
        maxItems: 15,
        // htmlFields: ['description', 'content'],
        // enforceTrailingSlashes: false,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date || node.fields.date,
          content: node.content
        })
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/love']
      }
    }
  ],

  transformers: {
    remark: {
      slug: false,
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'dark_vs', skipInline: true } ]
      ]
    }
  }
}
