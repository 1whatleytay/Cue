<template>
  <div>
    <div class="text-center second my-4">
      <div class="text-4xl second">Get Started!</div>
      <div class="text-xl second">Pick a subject from one of the following.</div>
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
