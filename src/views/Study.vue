<template>
  <div>
    <div v-if="!showResults && cards.length > 0" class="text-center">
      <div class="text-3xl text-center">{{ currentQuestion + 1 }} / {{ cards.length }}</div>
      <Card :Answer="cards[currentQuestion].correct[0]" :answers="cards[currentQuestion].choices"
        :Question="cards[currentQuestion].question" :buildMode="false" :multChoice="true"
        @answer="checkAnswer" ref="card"/>
      <button class="rounded bg-blue-400 text-white border-none px-16 py-4 text-lg" @click="nextQuestion()">Next</button>
    </div>
    <div v-if="showResults" class="text-center">
      <div class="text-6xl">Good Job!</div>
      <div class="text-3xl">You got {{ questionsCorrect }} question(s) correct and earned {{ questionsCorrect * 4 }} XP.</div>
      <router-link tag="button" to="/" class="bg-blue-500 text-white px-16 py-4 mt-8 rounded text-2xl">Return Home</router-link>
    </div>
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
      questionsCorrect: 0,
      showResults: false
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
  },

  methods: {
    checkAnswer(value) {
      if (value) {
        axios.get(connection + 'users/1/addxp')
        this.questionsCorrect++
      }
    },

    nextQuestion() {
      if (this.currentQuestion === this.cards.length - 1) {
        this.showResults = true
      }
      this.currentQuestion++

      this.$refs['card'].DisplayAnswerMC = false
    }
  }
}
</script>