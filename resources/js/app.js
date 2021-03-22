import Vue from 'vue'
import './task/plugins/vuetify'
import router from './task/router'
import store from './task/store'
import App from './task/App.vue'
import vuetify from './task/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

const app = new Vue({
    vuetify,
    store,
    router,
    render: (h) => h(App)
})
Vue.prototype.__ = (key, ...parrams) => {
    return app.$vuetify.lang.translator(key, ...parrams)
}

app.$mount('#app')
