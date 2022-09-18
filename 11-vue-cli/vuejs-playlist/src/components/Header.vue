<template>
  <header>
    <h1 @click="changeTitle">
        {{title}}
    </h1>
  </header>
</template>

<script>
export default {
    props:{
        title:{
            type:String
        }
    },
    data(){
        return {
            title:'Vue Ninjas'
        } 
    },
    methods:{
        changeTitle:function(){
            this.$emit('changeTitle','Vue wizards')
            // this.title = "Vue wizards"
        }
    }
}
</script>

<style scoped>
    header{
        background: lightseagreen;
        padding: 10px;
        display: flex;
        justify-content: center;
    }
    h1{
        color:#222;

    }
</style>