
new Vue({
    el:'#vue-app',
    data:{
       age: 27
    },
    methods:{
        add: function(val) {
            this.age +=  val
        },
        substract :function(val){
            this.age -=  val
        }
    }
});