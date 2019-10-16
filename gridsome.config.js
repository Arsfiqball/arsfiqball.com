module.exports = {
  siteName: 'Arsfiqball',
  siteDescription: 'Software & electronics engineer, graphic designer and JS fanboy',
  icon: './src/icon.jpg',

  templates: {
    Single: '/:name',
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
