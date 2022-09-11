
new Vue({
    el:'#vue-app',
    data:{
        name:"Can Baran",
        job:"Engineer",
        website:"https://google.com",
        websiteTag:"<a href='https://google.com'>Google Second</a>"
    },
    methods:{
        greet : function(val){
            return 'Hello , Good ' + val + ' from vue course ' + this.name
        }
    }
});