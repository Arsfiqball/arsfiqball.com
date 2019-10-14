<template>
  <g-link :to="post.path" class="pc">
    <div class="columns is-mobile">
      <div v-if="post.cover_image" class="column is-narrow pc-image">
        <g-image v-if="post.cover_image" class="post-banner-image" :src="post.cover_image" />
      </div>
      <div class="column">
        <div class="title is-5 is-hidden-mobile" style="margin-bottom: 0;">
          {{ post.title }}
        </div>
        <div class="title is-6 is-hidden-tablet" style="margin-bottom: 0;">
          {{ post.title }}
        </div>
        <div class="tags is-hidden-mobile" style="margin-top: .75rem;">
          <span class="tag is-black">
            {{ post.date }}
          </span>
          <g-link class="tag is-link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
            # {{ tag.title }}
          </g-link>
        </div>
      </div>
    </div>
  </g-link>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss" scoped>
.pc {
  display: block;
  padding: .75rem 1rem;
  margin: 0 -1rem;

  &:hover {
    background: #ddd;
  }

  .pc-image {
    width: 30%;
    max-width: 160px;
    line-height: 1;
  }
}
</style>
