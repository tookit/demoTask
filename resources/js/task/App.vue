<template>
  <v-app dark>
    <router-view></router-view>
    <!-- global snackbar -->
    <v-snackbar
      :timeout="3000"
      app
      top
      centered
      :color="snackbar.color"
      v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="snackbar.show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      snackbar: {
        show: false,
        text: '',
        color: ''
      }
    }
  },
  methods: {
  },
  mounted() {
    if (typeof window !== undefined && window._VMA === undefined) {
      window._VMA = this
    }
  },
  created() {
    this.$on('SHOW_SNACKBAR', (e) => {
      this.snackbar = {
        show: true,
        text: e.text,
        color: e.color
      }
    })
  }
}
</script>

<style lang="sass" scoped>
.setting-fab
  top: 50% !important
  right: 0
  border-radius: 0
.chat-fab
  top: calc(50% + 40px) !important
  right: 0
  border-radius: 0
</style>
