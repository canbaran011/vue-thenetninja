<template>
  <div>
    <form-helper>
      <h2 slot="title">I am the {{title}} </h2>
      <p slot="text">I am paragraph text from slot</p>
      <div slot="form-header">
        <h3>this is title of form</h3>
        <p>Information about form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name" required/>
        <input type="password" placeholder="password">
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">
          Submit
        </button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './components/formHelper.vue';
export default {
  components:{
    'form-helper':formHelper
  },  
  data () {
    return { 
      title:'dynamic slot title'
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
