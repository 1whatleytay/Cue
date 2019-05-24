<template>
  <div>
    <div></div>
    <img src="">
    <div class="text-center text-white text-5xl bg-blue-800 mt-12">
      QCard
    </div>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
    <Card Question="superfluous" Answer="Smith"/>
  </div>
</template>

<script>
import Card from "../components/Card.vue"

export default {
  name: 'home',
  components: {Card},

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