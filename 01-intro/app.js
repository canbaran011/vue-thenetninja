
new Vue({
    el:'#vue-app',
    data:{
        name:"Can Baran",
        job:"Engineer"
    },
    methods:{
        greet : function(val){
            return 'Hello , Good ' + val + ' from vue course'
        }
    }
});