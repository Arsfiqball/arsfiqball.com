<template>
  <Layout>
    <div class="container page-heading">
      <p class="title is-4 is-hidden-mobile has-text-centered">
        Portfolio
      </p>
      <p class="title is-5 is-hidden-tablet has-text-centered">
        Portfolio
      </p>
      <p class="subtitle is-6 has-text-centered">
        Projects, Open Source, Related Works
      </p>
    </div>

    <div class="divider"></div>
    <div class="spacer"></div>

    <div class="container page-content">
      <div class="columns portfolios is-multiline is-mobile">
        <div class="column is-4" v-for="edge in $page.portfolios.edges" v-key="edge.node.id">
          <div class="overlay-image">
            <g-link :to="edge.node.path">
              <img :src="edge.node.cover_image.src"/>
              <div class="hovered-text">
                {{edge.node.title}}
              </div>
            </g-link>
          </div>
        </div>
      </div>
    </div>

    <div class="spacer"></div>
  </Layout>
</template>

<page-query>
query Portfolio {
  portfolios: allPortfolio (sortBy: "priority", order: ASC) {
    edges {
      node {
        id
        title
        description
        cover_image (width: 240, height: 240, blur: 10)
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Portfolio'
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

.columns.portfolios {
  .column {
    .overlay-image {
      position: relative;
      width: 100%;
      box-shadow: 0px 6px 10px rgba(#000, .1);

      img {
        display: block;
        width: 100%;
        height: auto;
        opacity: 1;
        transition: .1s ease;
      }

      .hovered-text {
        color: #000;
        font-size: medium;
        line-height: 1.5em;
        text-shadow: 0px 0px 4px #fff;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        opacity: 0;
        transition: .1s ease;
      }

      &:hover {
        img {
          opacity: .3;
        }

        .hovered-text {
          opacity: 1;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .columns.portfolios {
    .column {
      padding: 3px;

      .overlay-image {
        .hovered-text {
          font-size: small;
          line-height: 1.2em;
          width: 90%;
        }
      }
    }
  }
}
</style>
