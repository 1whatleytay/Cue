<template>
  <div>
    <div class="text-3xl text-center">{{ currentQuestion + 1 }} / {{ cards.length }}</div>
    <Card/>
  </div>
</template>

<script>
import connection from '../config'
import { onSet, NavState } from '../nav'

import Card from '../components/Card.vue'

import axios from 'axios'

export default {
  components: { Card },

  data() {
    return {
      currentQuestion: 0,
      cards: [],
    }
  },
  
  mounted() {
    onSet((state) => {
      state.color = 
      state.name = `Studying for ${this.$route.params.name}`
    })

    axios.get(connection + `sections/${this.$route.params.name.toLowerCase()}/study`).then((request) => {
      this.cards = request.data
      console.log(this.cards)
    })
  }
}
</script>