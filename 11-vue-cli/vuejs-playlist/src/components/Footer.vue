<template>
  <footer>
    <p> {{footer}} {{title}}</p>
  </footer>
</template>

<script>
    import {bus} from '../main'
export default {
    
    props:{
        title:{
            type:String
        }
    },
    data(){
        return{
            footer:'Copyright 2022 '
        }
    },
    created(){
        bus.$on('titleChanged',(data)=>{
            this.title = data
        })
    }
}
</script>

<style scoped>
    footer{
        background: lightgrey;
        padding: 10px;
        display: flex;
        justify-content: center;
    }
    h1{
        color:#222;

    }
</style>