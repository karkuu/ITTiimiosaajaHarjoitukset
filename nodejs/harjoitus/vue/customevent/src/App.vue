<template>
  <div id="app">
    <h1> Child component says: {{msg}}</h1>
    <CustomEvent @my-custom-event="handleEvent(...arguments)"/>
  </div>
</template>

<script>
import CustomEvent from './components/CustomEvent'

export default {
  name: 'App',
  components: {
    CustomEvent
  },
  data () {
    return {
      msg: ""
    }
  },
  methods: {
    handleEvent: function(data) {
      this.msg = data;
    }
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
