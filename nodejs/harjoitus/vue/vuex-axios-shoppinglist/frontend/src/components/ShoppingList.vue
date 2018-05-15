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
        <button v-on:click="addToList()">Save</button>
    
        <ul v-if="this.$store.state.shoppingList.length">
            <li v-for="(item,index) in this.$store.state.shoppingList">
                {{item.count}} of {{item.type}} at {{item.price}}€
                <button v-on:click="removeFromList(index)">Remove</button>
                <button v-on:click="editItem(index)">Edit</button>
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
            count:0,
            currentItem:-1
        }
    },
    methods: {
        addToList: function () {
            let shoppingItem = {
                type:this.type,
                price:this.price,
                count:this.count
            }
            if (this.currentItem === -1){
                this.$store.dispatch("addToList",shoppingItem);
            }
           /* else {
                this.$store.commit("editItem",shoppingItem,this.currentItem);
            }*/
            this.type = "";
            this.price = 0;
            this.count = 0;
            //this.currentItem = -1;
           
        },
        removeFromList: function(index) {
            this.$store.dispatch("removeFromList",this.$store.state.shoppingList[index].id);
        }/*,
        editItem: function(index) {
            this.currentItem = index;
            this.price = this.$store.state.shoppingList[index].price;
            this.count = this.$store.state.shoppingList[index].count;
            this.type = this.$store.state.shoppingList[index].type;
        }*/
    }
}
</script>
