<template>
  <div>
    <div v-if="user" v-bind:class="[ `bg-${getLevelColor()}` ]"
      class="w-5/6 mx-auto rounded text-white text-center">
      <div class="text-5xl">{{ user.name }}</div>
        <div class=" bg-gray-200 text-center"> 
          <h1 class="text-black text-left">User profile</h1>
          <img class="rounded-full" src="https://i.imgur.com/tnjGTBM.jpg" :height="250" align="left"/>
          <div class="py-16 px-16 text-black rounded-sm bg-gray-100 text-lg text-left">
            <span class="font-bold">Name:</span> {{user.name}} 
            <br>
            <span class="font-bold">Cards Contributed:</span> over 9000
            <br>
            <span class="font-bold">Title:</span> {{user.levelName}}
            <br>
            <span class="font-bold">Level:</span> {{user.level}}
            <br>
            <span class="font-bold">XP:</span> {{user.xp}}
            
          </div>
          
        </div>

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
      console.log(this.user)
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