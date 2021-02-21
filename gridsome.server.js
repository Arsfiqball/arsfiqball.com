const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    const location = path.resolve(__dirname, 'content/portfolio.yml')
    const file = fs.readFileSync(location, 'utf8')
    const data = yaml.load(file)
    const collection = addCollection({ typeName: 'Portfolio' })

    data.forEach(node => {
      collection.addNode({
        title: node.title,
        description: node.description,
        image: require.resolve(path.resolve(__dirname, 'content', node.image)),
        start: node.start,
        end: node.end,
        tags: node.tags ? node.tags.map(r => r.toString()) : [],
        private: !!node.private,
        links: node.links
          ? node.links.map(r => ({
              title: r.title,
              url: r.url
            }))
          : []
      })
    })
  })
}
