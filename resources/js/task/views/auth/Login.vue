<template>
  <v-container class="page_login" fill-height>
    <v-row>
      <v-col>
        <v-card class="pa-3 page_login__card" tile>
          <v-card-title>
            <h1 class="primary--text display-1 page-login_title">
              Demo Task
            </h1>
          </v-card-title>
          <v-card-text>
            <v-alert type="info">
              Login : admin/admin
            </v-alert>
            <v-form
              ref="form"
              v-model="formValid"
              class="my-10"
              lazy-validation
            >
              <v-text-field
                v-model="formModel.username"
                append-icon="mdi-email"
                autocomplete="off"
                name="login"
                label="Username"
                type="text"
                required
                outlined
                :rules="formRule.username"
              />
              <v-text-field
                v-model="formModel.password"
                append-icon="mdi-lock"
                autocomplete="off"
                name="password"
                label="Password"
                type="password"
                :rules="formRule.password"
                required
                outlined
                @keyup.enter="login"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn large text @click="login">
            </v-btn>
            <v-btn large tile color="primary" :loading="loading" @click="login">
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageLogin',
  data() {
    return {
      loading: false,
      formValid: false,
      formModel: {
        username: null,
        password: null
      },
      formRule: {
        username: [(v) => !!v || "username required"],
        password: [(v) => !!v || "password required"]
      },
    }
  },
  computed: {
    prefix() {
      return ''
    }
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$store
          .dispatch('login', this.formModel)
          .then(() => {
            this.loading = false
            this.$router.push('/')
          })
          .catch(() => {
            this.loading = false
          })
      }
    },
    handleSocialLogin() {}
  }
}
</script>

<style lang="sass" scoped>
.page_login
  &__card
  max-width: 600px
  margin: 0 auto
</style>
