
Vue.component('greeting', {
    template: '<p>Hey there I am {{name}} <button @click="changeName">changeName</button></p>',
    data: function () {
        return {
            name: 'Yoshi'
        }
    },
    methods:{
        changeName:function(){
            this.name = 'Mario';
        }
    }
})

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue App One'
    },
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'

    }
});