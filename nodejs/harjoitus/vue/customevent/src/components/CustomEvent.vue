<template>
  <div>
      <p>Enter message and press button to send</p>
      <input v-model="newmessage" type="text"/>
      <button v-on:click="sendMessage()">Send</button>
  </div>
</template>
<script>
export default {
  name:"CustomEvent",
  data () {
      return {
          newmessage:""
      }
  },
  methods: {
      sendMessage: function() {
          this.$emit("my-custom-event",this.newmessage);
          this.newmessage = "";
      }
  }
}
</script>

