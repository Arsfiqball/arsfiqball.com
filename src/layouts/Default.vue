<template>
  <div id="app" class="has-navbar-fixed-top">
    <Navbar :is-top="isTop"/>

    <main class="main">
      <slot/>
    </main>

    <div class="container made-with">
      Made with ❤️ by Arsfiqball
      <span class="is-hidden-mobile">
        / <a target="_blank" href="https://github.com/Arsfiqball/arsfiqball.com">Source Project</a>
      </span>
      <span class="is-pulled-right is-hidden-mobile">
        Powered by
        <a target="_blank" href="https://gridsome.org/">Gridsome</a> and
        <a target="_blank" href="https://www.netlify.com/">Netlify</a>
      </span>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  props: {
    showLogo: { default: true }
  },

  components: {
    Navbar
  },

  data () {
    return {
      isTop: process.isClient ? window.scrollY < 20 : true
    }
  },

  methods: {
    handleScroll () {
      if (process.isClient) {
        this.isTop = window.scrollY < 20
      }
    }
  },

  mounted () {
    if (process.isClient) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },

  destroyed () {
    if (process.isClient) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
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
