<template>
  <div v-bind:class="[ `bg-${color}` ]"
    class="w-full text-white text-3xl rounded-lg mx-auto cursor-pointer py-24 p-2" @click="jump()">
    <div class="text-4xl">{{ name }}</div>
    <div class="text-md">by {{ author }}</div>
  </div>
</template>

<script>
export default {
  props: [ 'name', 'color', 'author' ],

  methods: {
    jump() {
      console.log('Jumping')
    }
  }
}
</script>