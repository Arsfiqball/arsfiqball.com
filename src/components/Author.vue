<template>
	<div class="author">

		<g-image alt="Author image" class="author__image" src="~/assets/images/author.jpg" width="180" height="180" blur="5" />

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<p class="author__intro">
			A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.
		</p>

		<p class="author__links">
			<a href="//twitter.com/gridsome">Follow on Twitter</a>
			<a href="//github.com/gridsome/gridsome-starter-blog">GitHub</a>
		</p>

	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
	props: ['showTitle']
}
</script>

<style lang="scss" scoped>
</style>
