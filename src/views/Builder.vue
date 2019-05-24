<template>
  <div>
    <Card :builderMode="true"/>
  </div>
</template>

<script>
import connection from '../config'
import { onSet } from '../nav'

import axios from 'axios'

import Card from '../components/Card.vue'

export default {
  components: { Card },

  mounted() {
    axios.get(connection + `sections/${this.$route.params.name.toLowerCase()}`).then((request) => {
      onSet((state) => {
        state.color = request.data.color
        state.name = 'Building'
      })
    })
  }
}
</script>