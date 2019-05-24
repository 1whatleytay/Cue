<template>
  <div>
    <div></div>
    <img src="">
    <div class="text-center text-white text-5xl bg-blue-800 mt-12">
      QCards
    </div>
    <div class="bg-red-200" @click="onPressed()">
      BuildMode Toggle {{build}}
    </div>
    <Card Question="superfluous" Answer="Smith" :buildMode="build"/>

  
  </div>
</template>

<script>
import Card from "../components/Card.vue"

export default {
  name: 'home',
  components: {Card},

  methods: {
    onPressed(){
    this.build = !this.build  
    }
  },
  data() {
    return {
      john: "Hello",
      build: false
    }
  },
}
</script>
