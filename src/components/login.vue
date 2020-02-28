<template>
  <v-card
    color="grey lighten-4"
    flat
    height="100%"
    width="100%"
    tile
  >
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
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        ></v-text-field>
        <v-card-actions class="justify-center">
        <v-btn
          :disabled="!valid"
          color="dark"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    show: false,
    pwdRules: [
      v => !!v || 'password is required'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  }
}
</script>
