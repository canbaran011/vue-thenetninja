<template>
  <footer>
    <p> {{footer}} {{title}}</p>
  </footer>
</template>

<script>
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