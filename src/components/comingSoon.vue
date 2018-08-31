<template>
  <div class="coming-soon">
    <img src="../assets/images/developing.png"/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'comingSoon',
  data () {
    return {
      msg: '我们正在努力开发，将以最快的速度上线。'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  font-size: 0.9em;
}
.coming-soon{
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.coming-soon>img{
  width: 40%;
  height: auto;
  margin-bottom: 1em;
}
</style>
