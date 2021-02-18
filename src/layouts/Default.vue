<template>
  <div id="app" :class="['has-navbar-fixed-top']">
    <Navbar :is-top="isTop" :is-dark-mode="isDarkMode" @toggle-dark-mode="toggleDarkMode"/>

    <main class="main">
      <slot/>
    </main>

    <div>
      <MadeWith />
    </div>
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
      isTop: process.isClient ? window.scrollY < 20 : true,
      isDarkMode: false
    }
  },

  methods: {
    handleScroll () {
      if (process.isClient) {
        this.isTop = window.scrollY < 20
      }
    },

    toggleDarkMode () {
      const theme = this.isDarkMode ? 'light' : 'dark'
      this.setTheme(theme)
    },

    setTheme (theme) {
      this.isDarkMode = theme === 'dark'
      if (this.isDarkMode) document.documentElement.classList.add('dark-mode')
      else document.documentElement.classList.remove('dark-mode')
      localStorage.setItem('theme', theme)
    }
  },

  mounted () {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const defaultTheme = userPrefersDark ? 'dark' : 'light'
    const theme = localStorage.getItem('theme') || 'light'
    this.setTheme(theme)

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
