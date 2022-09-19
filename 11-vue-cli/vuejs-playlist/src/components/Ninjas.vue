<template>
  <div id="ninjas">
    <h1>List of ninjas</h1>
    <ul>
      <li
        v-for="ninja in ninjas"
        :key="ninja"
        @click="ninja.show = !ninja.show"
      >
        <p>{{ ninja.name }}</p>
        <p v-show="ninja.show">{{ ninja.speciality }}</p>
      </li>
    </ul>
    <button @click="deleteNinja">delete ninja</button>
  </div>
</template>
  <script>
export default {
  props:{
    ninjas:{
        type:Array,
        required:true
    }
  },
  data() {
    return {};
  },
  methods:{
    deleteNinja:function(){
        this.ninjas.pop()
    }
  },
  //life cycle hooks
  beforeCreate(){
    alert('before create')
  },
  create(){
    alert('created')
  },
  beforeMount(){
    alert('before mount')
  },
  mounted(){
    alert('mounted')
  },
  beforeUpdate(){
    alert('before update')
  },
  updated(){
    alert('updated');
  },

};
</script>
  <style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>