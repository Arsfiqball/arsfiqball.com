<template>
  <div class="container made-with">
    Made with <g-link to="/love" class="has-text-danger">❤️</g-link> by Arsfiqball
    <span class="is-hidden-mobile">
      / <a target="_blank" href="https://github.com/Arsfiqball/arsfiqball.com">Source Project</a>
    </span>
    <span class="is-pulled-right is-hidden-mobile">
      Powered by
      <a target="_blank" href="https://gridsome.org/">Gridsome</a> and
      <a target="_blank" href="https://www.netlify.com/">Netlify</a>
    </span>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss" scoped>
.made-with {
  padding: 0 0 3rem 0;
}

@media screen and (max-width: 768px) {
  .made-with {
    padding: 0 1rem 3rem 1rem;
    text-align: center;
  }
}
</style>
