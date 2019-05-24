<template>
  <div class="text-center">
    <div class="text-3xl text-center">{{ currentQuestion + 1 }} / {{ cards.length }}</div>
    <Card :Answer="cards[currentQuestion].correct[0]" :answers="cards[currentQuestion].choices" :Question="cards[currentQuestion].question" :buildMode="false" :multChoice="true"/>
    <button class="rounded bg-blue-400 text-white border-none px-16 py-4 text-lg" @click="nextBtn()">Next</button>
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
  methods : {
    nextBtn()
    {
      this.currentQuestion += 1
    }
  },
  
  mounted() {
    axios.get(connection + `sections/${this.$route.params.name.toLowerCase()}/study`).then((request) => {
      onSet((state) => {
        state.color = request.data.color
        state.name = 'Studying'
      })
      this.cards = request.data.cards
      console.log(this.cards)   
    })
  }
}
</script>