<template>
    <h1>{{message}}</h1>    
</template>
<script>
import $ from "jquery"
export default {
    data: function(){
        return {
            message:"hello world!"
        }
    }
}
</script>
<style scoped>
    h1{
        color:green
    }
</style>
