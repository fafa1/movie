<template>
  <div id="app">
    <pesquisar></pesquisar>
    <corpo></corpo>
  </div>
</template>

<script>
import pesquisar from './components/pesquisar'
import corpo from './components/corpo'


export default {
  name: 'App',
  components: {
    pesquisar,
    corpo
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
