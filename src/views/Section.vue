<template>
  <div v-if="info" class="text-center">
    <router-link tag="button" :to="`/study/${this.info.name}`" v-bind:class="[ `bg-${info.color}` ]"
      class="w-64 h-16 rounded text-white text-3xl border-none cursor-pointer mx-8"
      @click="startStudying()">Study</router-link>
      <router-link tag="button" :to="`/builder/${this.info.name}`" v-bind:class="[ `bg-${info.color}` ]"
      class="w-64 h-16 rounded text-white text-3xl border-none cursor-pointer mx-8"
      @click="startStudying()">New Card</router-link>
    <div class="my-8 text-6xl">Popular Cards</div>
    <div class="flex flex-wrap">
      <div v-for="(card, index) in info.cards" v-bind:key="index" class="w-1/4 mx-auto p-4">
        <LinkCard :name="card.question" :color="info.color" :author="card.creatorName"/>
      </div>
    </div>
  </div>
</template>

<script>
import connection from '../config'
import { onSet } from '../nav'

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
      onSet((state) => {
        state.color = request.data.color
        state.name = request.data.name
      })
    })
  },

  methods: {
    startStudying() {
      this.$router.push(`/study/${this.info.name}`)
    }
  }
}
</script>