<template>
  <div id="app">
    <div v-if="!navState.name" v-bind:class="[ `bg-${navState.color}` ]"
      class="text-white text-center text-6xl py-4 mb-8">QCards</div>
    <div v-if="navState.name" v-bind:class="[ `bg-${navState.color}` ]"
      class="text-white text-6xl py-4 mb-8 flex">
      <div class="w-1/2 text-left pl-8">{{ navState.name }}</div>
      <div class="w-1/2 text-right pr-8 text-4xl pt-4">QCards</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { setState, NavState } from './nav'

export default {
  data() {
    return {
      navState: new NavState()
    }
  },

  mounted() {
    setState(this.navState)
  }
}
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css?family=Philosopher|Roboto&display=swap');
body {
  margin: 0px;
}

div {
  font-family: 'Philosopher', sans-serif;
}

.second {
  font-family: 'Roboto', sans-serif;
}
</style>
