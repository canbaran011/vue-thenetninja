import Vue from 'vue'
import App from './App.vue'
import Routes from './routes'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes,
  mode:'history'
})

// Filters

// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase()
// });

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...'
})


// Custom directives
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8)
//   }
// });

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value== 'wide'){
      el.style.maxWidth = "1200px"
    }
    if (binding.value== 'narrow') {
      el.style.maxWidth = "500px"
    }
    if(binding.arg == 'column'){
      console.log('column')
      el.style.background= '#ddd'
      el.style.padding = '20px'

    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
