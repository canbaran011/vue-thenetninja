<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
  import Ninjas from './Ninjas.vue'
export default {
  components:{
    'ninjas': Ninjas
  },
  name: "app",
  data() {
    return {
      title: "CBG App",
    };
  },
};
</script>

<style scoped>
  h1{
    color: purple;
  }
</style>
