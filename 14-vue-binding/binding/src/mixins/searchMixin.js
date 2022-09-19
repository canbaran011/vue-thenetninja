export default {
    computed:{
// custom search filter
    filteredBlogs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        });
      },
    }
}