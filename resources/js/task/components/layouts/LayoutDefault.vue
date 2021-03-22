<template>
  <div class="admin">
    <app-drawer class="app--drawer" ref="drawer" />
    <app-toolbar class="app--toolbar" @side-icon-click="handleDrawerVisiable" />
    <v-main>
      <!-- Page Wrapper -->
      <div class="page-wrapper"><router-view /></div>
      <!-- App Footer -->
      <v-footer height="auto" class="pa-3 app--footer">
        <v-spacer />
        <span class="caption mr-1">Make With Love</span>
        <v-icon color="pink" small>mdi-heart</v-icon>
      </v-footer>
    </v-main>
  </div>
</template>

<script>
import AppDrawer from '@/components/AppDrawer'
import AppToolbar from '@/components/AppToolbar'

export default {
  name: 'LayoutDefault',
  components: {
    AppDrawer,
    AppToolbar,
  },

  data() {
    return {
      showDrawer: true
    }
  },
  methods: {
    handleDrawerVisiable() {
      this.$refs.drawer.toggleDrawer()
    }
  },
  created() {
    this.$store.dispatch('fetchProject', { pageSize: -1 })
  }
}
</script>

<style lang="sass" scoped>
.page-wrapper
  min-height: calc(100vh - 112px - 48px)
  padding-top: 35px
</style>
