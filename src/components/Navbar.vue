<template>
  <nav :class="['navbar is-transparent is-fixed-top', !isTop ? 'is-not-top' : null]" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <g-link to="/" class="navbar-item">
          <img src="../icon.jpg">
        </g-link>
        <g-link to="/about" class="navbar-item">
          Me
        </g-link>
        <g-link to="/posts" class="navbar-item">
          Posts
        </g-link>
        <g-link to="/contact" class="navbar-item">
          Contact
        </g-link>

        <a role="button" @click="isActive = !isActive" :class="['navbar-burger burger', isActive ? 'is-active' : null]" aria-label="menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="['navbar-menu', isActive ? 'is-active' : null]">
        <div class="navbar-start">
          <a href="https://drive.google.com/open?id=14q_MYyhhMhzMy7qDIN-IV9WCHKO3cSFb" target="_blank" class="navbar-item">
            Download CV
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
  props: ['isTop'],

  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
.is-not-top {
  box-shadow: 0 0 20px 5px rgba(#000, .05);
  transition: 1s ease;
}
</style>
