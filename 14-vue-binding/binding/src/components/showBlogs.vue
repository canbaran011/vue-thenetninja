<template>
  <!-- custom directives v-theme -->
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div
      v-for="(blog, index) in filteredBlogs"
      :key="index"
      class="single-blog"
    >
    <router-link :to="'/blog/'+ blog.id"> <h2 v-rainbow>{{ blog.title | to-lowercase }}</h2> </router-link> 
      <!-- <h2 v-rainbow>{{ blog.title | to-lowercase }}</h2> -->
      <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
    
    import searchMixin from '../mixins/searchMixin'
export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        console.log(data);
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {
    // // custom search filter
    // filteredBlogs: function () {
    //   return this.blogs.filter((blog) => {
    //     return blog.title.match(this.search);
    //   });
    // },
  },
  filters: {
    toLowercase(value) {
      return value.toLowerCase();
    },
  },
  directives: {
    'rainbow':{
        bind(el,binding,vnode){
            el.style.color = "#" + Math.random().toString().slice(2,8)
        }
    }
  },
  mixins:[
    searchMixin
  ]
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: lightblue;
}
</style>