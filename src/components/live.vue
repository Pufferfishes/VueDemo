<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'live',
  data () {
    return {
      msg: 'Live Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
</style>
