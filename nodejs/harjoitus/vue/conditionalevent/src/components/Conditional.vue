<template>
    <div>
        <div v-if="isLogged">
            <label>Logout</label>
            <button v-on:click="logout()">Logout</button>
        </div>
        <div v-else>
            <label>Login</label>
            <button v-on:click="login()">Logit</button>
        </div>
        <p v-show="isLogged">
            Will not show if not logged in. This component will still be rendered.
        </p>
    </div>
</template>
<script>
export default {
    name:"Conditional",
    data() {
        return {
            isLogged:false
        }
    },
    methods: {
        login: function(event) {
            this.isLogged = true;
        },
        logout: function(event) {
            this.isLogged = false;
        }
    }
}
</script>