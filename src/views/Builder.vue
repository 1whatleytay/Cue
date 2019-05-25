<template>
  <div class="text-center">
    <Card :multChoice="true" :Question="card.question" :Answer="card.answer"
      :answers="card.answers" :buildMode="true" ref="card"/>
    <button class="bg-blue-500 text-white border-none text-3xl rounded py-4 px-12" @click="addQuestion()">
      Add
    </button>
  </div>
</template>

<script>
import connection from '../config'
import { onSet } from '../nav'

import axios from 'axios'

import Card from '../components/Card.vue'

export default {
  components: { Card },

  data() {
    return {
      card: {
        question: 'Question Name',
        answer: 'Answer',
        answers: [ 'Answer1', 'Answer2', 'Answer3', 'Answer4' ]
      }
    }
  },

  mounted() {
    axios.get(connection + `sections/${this.$route.params.name.toLowerCase()}`).then((request) => {
      onSet((state) => {
        state.color = request.data.color
        state.name = 'Building'
      })
    })
  },

  methods: {
    addQuestion() {
      console.log({
        creator: "1",
        section: this.$route.params.name.toLowerCase(),
        question: this.$refs['card'].question,
        choices: [ this.$refs['card'].optionA, this.$refs['card'].optionB, this.$refs['card'].optionC, this.$refs['card'].optionD ],
        correct: [
          this.$refs['card'].answer
        ]
      })

      axios.post(connection + 'cards/add', {
        creator: "1",
        section: this.$route.params.name.toLowerCase(),
        question: this.$refs['card'].question,
        choices: [ this.$refs['card'].optionA, this.$refs['card'].optionB, this.$refs['card'].optionC, this.$refs['card'].optionD ],
        correct: [
          this.$refs['card'].answer
        ]
      })
    }
  }
}
</script>