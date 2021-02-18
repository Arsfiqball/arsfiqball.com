<template>
  <Layout>
    <div class="container has-text-centered post-heading">
      <PostTags :post="$page.post"/>
      <div class="title is-4 is-hidden-mobile" v-html="renderEmoji($page.post.title)" />
      <div class="title is-5 is-hidden-tablet" v-html="renderEmoji($page.post.title)" />
      <div class="subtitle is-6">
        <PostMeta :post="$page.post" />
      </div>
    </div>

    <div class="divider"></div>

    <div v-if="$page.post.cover_image" class="cover-image">
      <img :src="$page.post.cover_image.src">
    </div>

    <div class="container post-content">
      <div class="content" v-html="transform($page.post.content)" />
    </div>

    <div class="divider"></div>
    <div class="has-text-centered">
      Written by
      <b>Iqbal Mohammad Abdul Ghoni</b>
    </div>
    <div class="divider"></div>
    <div class="spacer"></div>

    <div class="container post-comment">
      <vue-disqus
        shortname="arsfiqball-github-blog"
        :title="$page.post.title"
        :url="'https://arsfiqball.com' + $url($page.post.path)"
        :identifier="$page.post.path"
      />
    </div>

    <div class="spacer"></div>
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import { renderEmoji } from '~/helper'

export default {
  components: {
    PostMeta,
    PostTags
  },

  metaInfo () {
    const meta = []

    if (this.$page.post.excerpt) {
      meta.push({
        name: 'description',
        content: this.$page.post.excerpt
      })
    } else {
      meta.push({
        name: 'description',
        content: this
          .$page
          .post
          .content
          .replace(/(<([^>]+)>)/gi, "")
          .slice(0, 360)
      })
    }

    return {
      title: this.$page.post.title,
      meta
    }
  },

  methods: {
    renderEmoji,

    transform (html) {
      return renderEmoji(html)
        .replace(/<table>/g, '<div class="table-container"><table>')
        .replace(/<\/table>/g, '</table></div>')
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    content
    excerpt
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss" scoped>
.post-heading {
  padding: 1.5rem 1.5rem 0 1.5rem;
}

.post-content {
  max-width: 746px;
  padding: 0 1.5rem;
}

.post-comment {
  max-width: 746px;
  padding: 1.5rem 1.5rem;
  border-radius: 1.5rem;
  background-color: var(--background-color-lighter, transparent);
}

.cover-image {
  width: 100%;
  max-width: 746px;
  margin: auto;
  padding: 1rem 0;

  img {
    border-radius: 6px;
  }
}

@media screen and (max-width: 768px) {
  .cover-image img {
    border-radius: 0px;
  }
}

.divider {
  display: block;
  width: 100px;
  height: 4px;
  background: var(--subtitle-color, #222);
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
