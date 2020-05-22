<template>
  <Layout>
    <div class="container has-text-centered page-heading">
      <div class="title is-4 is-hidden-mobile" v-html="renderEmoji($page.single.title)" />
      <div class="title is-5 is-hidden-tablet" v-html="renderEmoji($page.single.title)" />
      <p class="subtitle is-6">
        {{ $page.single.description }}
      </p>
    </div>

    <div class="divider"></div>

    <div class="container page-content">
      <div class="content" v-html="transform($page.single.content)" />
    </div>

    <div class="spacer"></div>
  </Layout>
</template>

<script>
import { renderEmoji } from '~/helper'

export default {
  components: {
  },

  metaInfo () {
    return {
      title: this.$page.single.title,
      meta: [{
        name: 'description',
        content: this.$page.single.description
      }]
    }
  },

  methods: {
    renderEmoji,

    transform (html) {
      return renderEmoji(html)
        .replace('<table>', '<div class="table-container"><table>')
        .replace('</table>', '</table></div>')
    }
  }
}
</script>

<page-query>
query Single ($id: ID!) {
  single (id: $id) {
    title
    path
    description
    content
  }
}
</page-query>

<style lang="scss" scoped>
.page-heading {
  padding: 1.5rem 1.5rem 0 1.5rem;
}

.page-content {
  max-width: 746px;
  padding: 0 1.5rem;
}

.divider {
  display: block;
  width: 100px;
  height: 4px;
  background: #222;
  line-height: 1;
  margin: 1.5rem auto;
  border-radius: 2px;
}

.spacer {
  display: block;
  margin-bottom: 3rem;
}

pre {
  border-radius: 6px;
}
</style>
