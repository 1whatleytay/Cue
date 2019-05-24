<template>
  <div>
    <div class="text-center text-white text-5xl bg-red-500 mt-12">
      My Center
    </div>
    <Card Question="john" Answer="Smith">
    </Card>
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
}
</script>
