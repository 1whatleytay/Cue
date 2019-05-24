<template>
  <div>
    <div v-if="user" v-bind:class="[ `bg-${getLevelColor()}` ]"
      class="w-5/6 mx-auto rounded text-white text-center">
      <div class="text-5xl">{{ user.name }}</div>
    </div>
  </div>
</template>

<script>
import connection from '../config'
import { onSet } from '../nav'

import axios from 'axios'

const levelColors = [
  'teal-700',
  'teal-300',
  'blue-500',
  'green-500',
  'yellow-400',
  'orange-500',
  'red-600',
  'indigo-800',
  'purple-900',
  'pink-700',
  'black'
];

export default {
  data() {
    return {
      user: null
    }
  },

  mounted() {
    axios.get(connection + `users/${this.$route.params.id}`).then((request) => {
      this.user = request.data

      onSet((state) => {
        state.color = this.getLevelColor()
        state.name = null
      })
    })
  },

  methods: {
    getLevelColor() {
      return levelColors[this.user.level]
    }
  }
}
</script>