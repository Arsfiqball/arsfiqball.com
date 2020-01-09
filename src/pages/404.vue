<template>
  <Layout :show-logo="false">
    <div class="container has-text-centered page-heading">
      <p class="title is-4 is-hidden-mobile">
        Page not found
      </p>
      <p class="title is-5 is-hidden-tablet">
        Page not found
      </p>
      <p class="subtitle is-6">
        Error 404
      </p>
    </div>

    <div class="divider"></div>

    <div class="container page-content">
      <div class="content">
        Sorry, but the page you're looking for is not here anymore or maybe the
        link is broken. Please <g-link to="/contact">contact me</g-link> if you
        are pretty sure that previously this page had something here and not
        deleted on purpose. I will check it soon. Thank you :)
        <br>
        <br>
        Check out my <g-link to="/contact">recent posts here</g-link>. Hope
        you'll find another satisfying content. Cheers... :D
      </div>
    </div>

    <div class="spacer"></div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Page not found'
  }
}
</script>

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
</style>
