<template>
  <div v-if="info" class="text-center">
    <button v-bind:class="[ `bg-${info.color}` ]"
      class="w-64 h-16 rounded text-white text-3xl border-none" @click="startStudying()">Study</button>
    <div class="my-8 text-6xl">Popular Cards</div>
    <div class="flex flex-wrap">
      <LinkCard v-for="(card, index) in info.cards" v-bind:key="index"
        :name="card.question" :color="info.color"/>
    </div>
  </div>
</template>

<script>
import connection from '../config'
import { onSet, NavState } from '../nav'

import LinkCard from '../components/LinkCard.vue'

import axios from 'axios'

export default {
  components: { LinkCard },

  data() {
    return {
      info: null
    }
  },

  mounted() {
    axios.get(connection + `sections/${this.$route.params.name.toLowerCase()}`).then((request) => {
      this.info = request.data
      console.log(this.info)
      onSet((state) => {
        state.color = request.data.color
        state.name = request.data.name
      })
    })
  },

  methods: {
    startStudying() {
    }
  }
}
</script>