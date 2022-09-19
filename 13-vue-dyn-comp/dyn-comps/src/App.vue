<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="component = 'form-one'">show form one</button>
    <button @click="component = 'form-two'">show form two</button>
  </div>
</template>

<script>

import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'

export default {
  components:{
    'form-one':formOne,
    'form-two':formTwo
  },
  data () {
    return {
      component:'form-one'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
