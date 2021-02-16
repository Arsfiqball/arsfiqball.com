<template>
  <Layout>
    <div class="section">
      <div class="container">
        <div class="tags">
          <g-link to="/posts" class="tag is-default">
            All
          </g-link>
          <g-link v-for="edge in $static.tags.edges" :class="['tag', edge.node.title === $page.tag.title ? 'is-link' : 'is-default']" :to="edge.node.path" :key="edge.node.id">
            {{edge.node.title}}
          </g-link>
        </div>
        <PostList title="List of Articles" :posts="$page.tag.belongsTo.edges" />
        <Pager class="pager buttons" linkClass="button is-small" :info="$page.tag.belongsTo.pageInfo"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag (id: $id) {
    title
    belongsTo (perPage: 10, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D MMM 'YY")
            timeToRead
            content
          }
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
  metaInfo () {
    return {
      title: 'Articles with tag: ' + this.$page.tag.title
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

