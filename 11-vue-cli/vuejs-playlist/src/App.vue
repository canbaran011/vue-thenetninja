<template>
  <div>
    <app-header :title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    
    <app-ninjas :ninjas="ninjas"></app-ninjas>
    <app-footer :title="title" ></app-footer>
    <!-- <h1>{{ title }}</h1> -->
    <!-- <ninjas></ninjas> -->
  </div>
</template>

<script>
  // import Ninjas from './Ninjas.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Ninjas from './components/Ninjas.vue'
export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
    // Ninjas
  },
  name: "app",
  data() {
    return {
      title: "CBG App",
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false },
      ],
    };
  },
  methods:{
    updateTitle:function(updatedTitle){//24
      this.title = updatedTitle;
    }
  }
};
</script>

<style>
  body{
   margin: 0px; 
   padding: 0px;
  }
</style>
<style scoped>
 
  h1{
    color: purple;
  }
</style>
