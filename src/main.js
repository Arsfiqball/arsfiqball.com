// Import main css
import '~/assets/style/index.scss'

// Disqus plugin
import VueDisqus from 'vue-disqus'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  
  Vue.use(VueDisqus)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
  })

  head.link.push({
    rel: 'alternate',
    title: 'RSS',
    type: 'application/rss+xml',
    href: 'https://arsfiqball.com/feed.xml'
  })

  head.link.push({
    rel: 'alternate',
    title: 'Atom 0.3',
    type: 'application/atom+xml',
    href: 'https://arsfiqball.com/feed.atom'
  })
}