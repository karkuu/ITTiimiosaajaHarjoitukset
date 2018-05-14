<template>
  <div id="app">
    <ListRendering/>
  </div>
</template>

<script>
import ListRendering from './components/ListRendering'

export default {
  name: 'App',
  components: {
    ListRendering
  }
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
