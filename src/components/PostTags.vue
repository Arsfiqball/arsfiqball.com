<template>
   <div class="tags is-centered">
   		<g-link class="tag is-default" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			# {{ tag.title }}
   		</g-link>
    </div>
</template>

<script>
export default {
  props: ['post', 'centered']
}
</script>

<style lang="scss" scoped>
</style>