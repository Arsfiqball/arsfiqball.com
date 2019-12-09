<template>
  <Layout :show-logo="false">
    <div class="section">
      <div class="title is-5 has-text-centered">
        Guess who she is?
      </div>
      <div class="field has-addons">
        <div class="control">
          <input
            class="input is-borderless is-radiusless is-shadowless"
            type="text"
            placeholder="Type her name here"
            v-model="inputName"
          />
        </div>
        <div class="control">
          <a class="button is-link is-radiusless" @click="findout">
            Findout
          </a>
        </div>
      </div>
      <div class="has-text-centered">
        {{message}}
      </div>
    </div>
  </Layout>
</template>

<script>
import MD5 from 'crypto-js/md5'

const ALMOST = "Almost correct, please type her complete name!"

const guess = {
  "befa874bbb58c1c5afb5f3302e7d7f5e": ALMOST,
  "d57d8d5422365e4295153b987f907c5e": ALMOST,
  "c03f2fe980530ad2fc6232f77a57f131": "Yes! :)"
}

export default {
  data () {
    return {
      inputName: null,
      message: null
    }
  },

  methods: {
    findout () {
      if (!this.inputName) {
        return
      }

      const hash = MD5(this.inputName.toLowerCase()).toString()

      if (!guess[hash]) {
        this.message = 'Sorry but you are wrong :)'
        return null
      }

      this.message = guess[hash]
    }
  },

  metaInfo: {
    title: "Guess who she is"
  }
}
</script>

<style lang="scss" scoped>
</style>
