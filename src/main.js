import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'YOUR-FIREBASE-REALTIME-DATABASE'
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  if (request.method === 'POST') {
    request.method = 'PUT'
  }
  next((response) => {
    response.json = () => {
      return { messages: response.body }
    }
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
