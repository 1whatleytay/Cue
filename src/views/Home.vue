<template>
  <div>
    <div></div>
    <img src="">
    <div class="text-center text-white text-5xl bg-red-500 mt-12">
      My Center {{ john }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
      john: "Hello"
    }
  },

  mounted() {
    console.log("Hello")
  },

  methods: {
    cheese() {
      
    }
  }
}
</script>