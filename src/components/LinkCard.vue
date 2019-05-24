<template>
  <div v-bind:class="[ `bg-${color}` ]"
    class="w-1/3 h-64 text-white text-3xl rounded-lg mx-auto cursor-pointer" @click="jump()">
    <div class="mt-24">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: [ 'name', 'color' ],

  methods: {
    jump() {
      console.log('Jumping')
    }
  }
}
</script>