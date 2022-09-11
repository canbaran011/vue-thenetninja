
new Vue({
    el:'#vue-app',
    data:{
       age: 27,
       x:0,
       y:0
    },
    methods:{
        add: function(val) {
            this.age +=  val
        },
        substract :function(val){
            this.age -=  val
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click:function(){
            alert("you clicked")
        }
    }
});