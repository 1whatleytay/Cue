<template>
  <router-link tag="div" :to="`subject/${this.title}`"
    class="rounded border w-full text-white overflow-hidden my-4 cursor-pointer"
    v-bind:class="[`bg-${color}`, `border-${color}`]">
    <div class="text-4xl second pl-8 py-4">{{ title }}</div>
    <div v-bind:style="{backgroundImage: `url('${source}')`}" class="w-full h-64 bkg-cover">
    </div>
  </router-link>
</template>

<script>
export default {
  props: [ 'title', 'color', 'source' ],
}
</script>

<style>
.bkg-cover {
  background-repeat: no-repeat;
  background-size: cover;
}
</style>