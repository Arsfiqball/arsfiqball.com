<template>
  <nav :class="['navbar is-transparent is-fixed-top', !isTop ? 'is-not-top' : null]" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <g-link to="/" class="navbar-item">
          <span style="display: inline-block; line-height: 1; padding: 2px 2px; border-radius: 8px; background: white;">
            <img src="../icon.jpg" style="display: block;">
          </span>
        </g-link>
        <g-link to="/about" active-class="is-active" class="navbar-item">
          Me
        </g-link>
        <g-link to="/posts" active-class="is-active" class="navbar-item">
          Posts
        </g-link>
        <g-link to="/contact" active-class="is-active" class="navbar-item">
          Contact
        </g-link>
        <a class="navbar-item is-hidden-tablet" @click="$emit('toggle-dark-mode', isDarkMode)">
          {{ isDarkMode ? '🌙' : '☀️' }}
        </a>

        <a role="button" @click="isActive = !isActive" :class="['navbar-burger burger', isActive ? 'is-active' : null]" aria-label="menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="['navbar-menu', isActive ? 'is-active' : null]">
        <div class="navbar-start">
          <a href="https://drive.google.com/open?id=1nqpkOEULDUl5n6iNoW6szJjjCkOJYej-" target="_blank" class="navbar-item">
            Download CV
          </a>
          <a class="navbar-item is-hidden-mobile" @click="$emit('toggle-dark-mode', isDarkMode)">
            {{ isDarkMode ? '🌙' : '☀️' }}
          </a>
        </div>
        <div class="navbar-end">
          <a href="https://github.com/Arsfiqball" target="_blank" class="navbar-item">
            GitHub
          </a>
          <a href="https://twitter.com/Arsfiqball" target="_blank" class="navbar-item">
            Twitter
          </a>
          <a href="https://instagram.com/Arsfiqball" target="_blank" class="navbar-item">
            Instagram
          </a>
        </div>
      </div>
    </div>
  </nav>
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
  props: ['isTop', 'isDarkMode'],

  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-item {
    outline: none;
  }
}
.is-not-top {
  box-shadow: 0 0 20px 5px rgba(#000, .05);
  transition: 1s ease;
}
</style>
