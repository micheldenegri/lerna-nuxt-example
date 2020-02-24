
<template>
  <h1>{{ theTitle }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import { capitalize } from '@micheldenegri/utils'

export default Vue.extend({
  data: () => {
    return {
      title: 'LERNA - NUXT'
    }
  },
  computed: {
    theTitle (): string {
      return capitalize(this.title)
    }
  }
})
</script>
