<template>
  <Layout>
    <div class="section">
      <div class="container">
        <div class="tags">
          <g-link to="/posts" class="tag is-link">
            All
          </g-link>
          <g-link class="tag is-default" v-for="edge in $static.tags.edges" :to="edge.node.path" :key="edge.node.id">
            {{edge.node.title}}
          </g-link>
        </div>
        <PostList title="List of Articles" :posts="$page.posts.edges" />
        <Pager class="pager buttons" linkClass="button is-small" :info="$page.posts.pageInfo"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post($page: Int) {
  posts: allPost (perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "D MMM 'YY")
        timeToRead
        cover_image (width: 100, height: 100, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
<static-query>
query Tag {
  tags: allTag {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>

<script>
import PostList from '@/components/PostList.vue'
import { Pager } from 'gridsome'

export default {
  components: {
    PostList,
    Pager
  },
  metaInfo: {
    title: 'List of Articles'
  }
}
</script>

<style lang="scss" scoped>
</style>
