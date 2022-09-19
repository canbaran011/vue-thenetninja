<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs>
    <list-blogs></list-blogs> -->
    <app-header></app-header>
      <router-view></router-view>

</div>
</template>

<script>
import AddBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";
import listBlogs from "./components/listBlogs.vue";
import header from "./components/header.vue";

export default {
  components: {
    'app-header':header,
    "add-blog": AddBlog,
    "show-blogs": showBlogs,
    "list-blogs":listBlogs
  },
  data() {
    return {};
  },
};
</script>

<style>

body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
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
