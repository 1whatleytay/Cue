<template>
  <div>
    <div class="text-center second mb-8">
      <div class="focus-point second">Get Started!</div>
      <div class="text-lg second">Pick a subject from one of the following.</div>
    </div>
    <div class="w-auto mx-12">
      <Subject v-for="(subject, index) in subjects" v-bind:key="index"
        :title="subject.name" :color="subject.color" :source="makeImageURL(subject.name)"/>
    </div>
  </div>
</template>

<script>
import { onSet, NavState } from '../nav'

import Card from "../components/Card.vue"
import Subject from "../components/Subject.vue"

import connection from '../config.js'
import axios from "axios"

export default {
  name: 'home',
  components: { Card, Subject },

  methods: {
    onPressed(){
    this.build = !this.build  
    }
  },
  data() {
    return {
      subjects: [],
    }
  },

  mounted() {
    onSet((state) => {
      state.color = 'blue-500'
      state.name = null
    })

    axios.get(connection + 'sections').then((request) => {
      this.subjects = request.data;
    });
  },
  
  methods: {
    makeImageURL(name) {
      return `/images/${name.toLowerCase()}.jpg`
    }
  }
}
</script>

<style>
.focus-point {
  font-size: 8rem;
}
</style>