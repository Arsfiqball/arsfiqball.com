<template>
  <Layout :show-logo="false">
    <div class="section">
      <div class="container">
        <div class="title is-5 has-text-centered">
          Guess who she is?
        </div>
        <div class="field has-addons" style="max-width: 400px; margin: 1rem auto;">
          <div class="control is-expanded">
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
    </div>
  </Layout>
</template>

<script>
import MD5 from 'crypto-js/md5'

const ALMOST = "Almost correct, please type her complete and correct name! 😁"
const CALL = "It's how I used to call her 😄"
const LOVELY_CALL = "It's my exclusive word to lovely call her 😊"

const guess = {
  "befa874bbb58c1c5afb5f3302e7d7f5e": ALMOST,
  "d57d8d5422365e4295153b987f907c5e": ALMOST,
  "e9360fbbcb06e697386d3672ddb52a33": ALMOST,
  "e8a88bb6f4d420a8517965d25cd54a14": CALL,
  "1846c75923656922409346559bd15573": CALL,
  "b55178b011bfb206965f2638d0f87047": CALL,
  "5be372d4352c9807436913fcd665e652": LOVELY_CALL,
  "49d9b9a1a556e1ff112c9168bd31903d": LOVELY_CALL,
  "57cb5a26334a6c1d5e27c49def4a0f0d": LOVELY_CALL,
  "dcb76da384ae3028d6aa9b2ebcea01c9": LOVELY_CALL,
  "a53ff64efd169c1b4d085d6e7075c8d7": LOVELY_CALL,
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
        this.message = 'Please type her name 😴'
        return null
      }

      const hash = MD5(this.inputName.toLowerCase()).toString()

      if (!guess[hash]) {
        this.message = 'Sorry but you are wrong 😴'
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
