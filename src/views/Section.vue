<template>
  <div v-if="info">
    {{ info.name }}
  </div>
</template>

<script>
import connection from '../config'
import { onSet, NavState } from '../nav'

import axios from 'axios'

export default {
  data() {
    return {
      info: null
    }
  },

  mounted() {
    axios.get(connection + `sections/${this.$route.params.name.toLowerCase()}`).then((request) => {
      this.info = request.data
      onSet((state) => {
        state.color = request.data.color
        state.name = request.data.name
        console.log('Work')
      })
    })
  }
}
</script>