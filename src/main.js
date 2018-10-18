import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-http-f15ce.firebaseio.com/data.json'

new Vue({
  el: '#app',
  render: h => h(App)
})
