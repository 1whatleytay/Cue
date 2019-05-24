<template>
  <div class="rounded border w-full text-white overflow-hidden my-4"
    v-bind:class="[`bg-${color}`, `border-${color}`]" @click="jump()">
    <div class="text-4xl second pl-8 py-4">{{ title }}</div>
    <div v-bind:style="{backgroundImage: `url('${source}')`}" class="w-full h-64 bkg-cover">
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'title', 'color', 'source' ],

  methods: {
    jump() {
      this.$router.push(`subject/${this.title}`)
    }
  }
}
</script>

<style>
.bkg-cover {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>