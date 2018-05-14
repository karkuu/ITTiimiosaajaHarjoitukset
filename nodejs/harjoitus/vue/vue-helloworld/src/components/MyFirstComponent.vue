<template>
  <div class="hello">
    <h1>{{ msg }} {{myname}}</h1>

  </div>
</template>

<script>
export default {
  name: 'MyFirstComponent',
  props: ['myname'],
  data () {
    return {
      msg: 'Hello'
    }
  }
}
</script>