<template>
  <div id="app" class="has-navbar-fixed-top">
    <Navbar :is-top="isTop"/>

    <main class="main">
      <slot/>
    </main>

    <MadeWith />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import MadeWith from '@/components/MadeWith'

export default {
  props: {
    showLogo: { default: true }
  },

  components: {
    Navbar,
    MadeWith
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
</style>
