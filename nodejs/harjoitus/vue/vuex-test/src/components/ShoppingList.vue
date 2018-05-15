<template>
    <div>
        <label>Enter type:</label>
        <input type="text" v-model="type"/>
        <br/>
        <label>Enter number of items:</label>
        <input type="number" v-model="count"/>
        <br/>
        <label>Enter price:</label>
        <input type="number" v-model="price"/>
        <br/>
        <button v-on:click="addToList()">Add</button>
    
        <ul v-if="this.$store.state.shoppingList.length">
            <li v-for="(item,index) in this.$store.state.shoppingList">
                {{item.count}} of {{item.type}} at {{item.price}}€
                <button v-on:click="removeFromList(index)">Remove</button>
            </li>
        </ul>
        <p v-else>
            Nothing on the list.
        </p>
    </div>

</template>




<script>
export default {
    name:"ShoppingList",
    data () {
        return {
            type:"",
            price:0,
            count:0
        }
    },
    methods: {
        addToList: function () {
            let shoppingItem = {
                type:this.type,
                price:this.price,
                count:this.count
            }
            this.$store.commit("addToList",shoppingItem);
            this.type = "";
            this.price = 0;
            this.count = 0;
        },
        removeFromList: function(index) {
            this.$store.commit("removeFromList",index);
        }
    }
}
</script>
