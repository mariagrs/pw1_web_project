<template>
  <v-card
    color="grey lighten-4"
    flat
    height="100%"
    width="100%"
    tile
  >
    <div class = "login">
      <v-toolbar dense>

        <v-toolbar-title>Editeur d'exercice</v-toolbar-title>

        <v-spacer></v-spacer>

      </v-toolbar>

      <v-form>
        <v-row
              align="center"
              justify="center"
        >

          <v-col cols="12" sm="6">

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              :rules="pwdRules"
              :type="show ? 'text' : 'password'"
            ></v-text-field>
            <v-card-actions class="justify-center">
            <v-btn
              :disabled="!valid"
              color="dark"
              class="mr-4"
              @click="login"
            >
              Login
            </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
    valid: true,
    show: false,
    pwdRules: [
      v => !!v || 'password is required'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]
  }),

  methods: {
    async login () {
      try {
        const result = await axios.post('http://localhost:3000/api/v1/login', {
          username: this.email,
          password: this.password
        })
        this.user = result.data
        this.loggedIn = true
        console.log(JSON.parse(JSON.stringify(this.user)))
        if (this.loggedIn === true) {
          console.log('connecté')
        }
      } catch (err) {
        this.errorLogin = err
      }
    }

  }
}
</script>
