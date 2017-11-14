<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="c"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  #c{
  	width: 100px;
  	height: 100px;
  	background: #42B983;
  }
}
</style>
