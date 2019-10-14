<template>
   <div class="post-meta">
      Posted {{ post.date }}
      <template v-if="post.timeToRead">
        - {{ post.timeToRead }} min read.
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss" scoped>
</style>