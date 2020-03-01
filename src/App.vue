<template>
  <div id="app">
    <v-app>
      <v-content>
        <router-view>
          <router-link to="/login">Login</router-link>
          <router-link to="/dashboard">Dashboard</router-link>
        </router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app'

}

</script>
