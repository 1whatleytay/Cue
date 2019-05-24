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
    axios.get(connection + `sections/${this.$route.params.name.toLowerCase()}/study`).then((request) => {
      onSet((state) => {
        state.color = request.data.color
        state.name = 'Studying'
      })
      this.cards = request.data.cards
    })
  }
}
</script>