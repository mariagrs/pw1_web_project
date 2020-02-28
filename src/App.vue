<template>
  <v-app>
    <v-content>
      <dashboard/>
    </v-content>
  </v-app>
</template>

<script>
import Dashboard from './components/dashboard'

export default {
  name: 'App',

  components: {
    Dashboard
  },

  data: () => ({
    //
  })
}
</script>
