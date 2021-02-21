<template>
  <Layout :show-logo="false">
    <div class="container has-text-centered post-heading">
      <div class="title is-4 is-hidden-mobile">
        Portfolio
      </div>
      <div class="title is-5 is-hidden-tablet">
        Portfolio
      </div>
      <div class="subtitle is-6">
        Personal and Commercial Projects
      </div>
    </div>

    <div class="divider"></div>

    <div :class="['modal', activePhotoPortfolioIndex >= 0 ? 'is-active' : null]">
      <div class="modal-background" @click="activePhotoPortfolioIndex = -1"></div>
      <div class="modal-content has-text-centered">
        <p v-if="activePhotoPortfolioIndex >= 0">
          <g-image :src="$static.portfolios.edges[activePhotoPortfolioIndex].node.imageOriginal" />
        </p>
      </div>
      <button class="modal-close is-large" @click="activePhotoPortfolioIndex = -1"></button>
    </div>

    <div class="section">
      <div class="container">
        <div class="columns" v-for="(portfolio, index) in $static.portfolios.edges" :key="portfolio.node.id">
          <div class="column is-narrow">
            <a
              title="click to see full image"
              style="display: block; text-align: center;"
              @click="activePhotoPortfolioIndex = index"
            >
              <g-image style="border-radius: .5rem;" :src="portfolio.node.image"/>
            </a>
          </div>
          <div class="column">
            <div class="is-size-6 is-pulled-right is-hidden-mobile">
              {{ portfolio.node.start }} - {{ portfolio.node.end }}
            </div>
            <div class="is-size-6 is-hidden-tablet" style="text-align: center; margin-bottom: 1rem;">
              {{ portfolio.node.start }} - {{ portfolio.node.end }}
            </div>
            <div class="title is-5">
              {{ portfolio.node.title }}
            </div>
            <a
              title="click to expand"
              :class="['subtitle description is-6', activeExpands.indexOf(index) >= 0 ? null : 'clamp']"
              v-html="portfolio.node.description"
              @click="activeExpands.indexOf(index) >= 0 ? activeExpands.splice(activeExpands.indexOf(index)) : activeExpands.push(index)"
            ></a>
            <div class="tags">
              <a class="tag is-default" v-for="(tag, j) in portfolio.node.tags" :key="'tag' + j">
                {{ tag }}
              </a>
              <a class="tag is-default" v-for="(link, k) in portfolio.node.links" :key="'link' + k" target="blank" :href="link.url">
                🔗 {{ link.title }}
              </a>
              <a class="tag is-default" v-if="portfolio.node.private">
                🔒 Private
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      activePhotoPortfolioIndex: -1,
      activeExpands: []
    }
  },

  methods: {
  },

  metaInfo: {
    title: "Portfolio"
  }
}
</script>

<static-query>
query {
  portfolios: allPortfolio (sortBy: "start", order: DESC) {
    edges {
      node {
        id,
        title,
        description,
        image (width: 250, height: 150),
        imageOriginal: image,
        start (format: "YYYY/MM/DD"),
        end (format: "YYYY/MM/DD"),
        tags,
        private,
        links {
          title,
          url
        }
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
.post-heading {
  padding: 1.5rem 1.5rem 0 1.5rem;
}

.divider {
  display: block;
  width: 100px;
  height: 4px;
  background: var(--subtitle-color, #222);
  line-height: 1;
  margin: 1.5rem auto;
  border-radius: 2px;
}

.subtitle.description {
  display: -webkit-box;

  &.clamp{
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
