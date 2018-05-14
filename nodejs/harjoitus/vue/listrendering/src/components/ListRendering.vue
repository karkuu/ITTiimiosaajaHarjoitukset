<template>
    <div>
        <label>Enter new message for the list:</label>
        <input v-model="newmessage" v-on:keyup.enter="addNew()"/>
        
        <ul v-if="items.length">
            <li v-for="(item,index) in items" :key="item.id">
                {{index+1}}.{{item.message}}
                <button v-on:click="remove(index)">Remove</button>
            </li>
        </ul>
        <p v-else>
            Nothing on the list.
        </p>
    </div>
</template>
<script>
export default {
    name:"ListRendering",
    data() {
        return {
            items:[
                {message:"Hello world!",id:1},
                {message:"Terve maailma!",id:2},
                {message:"Moi.",id:3},
            ],
            currentId:4,
            message:""         
        }
    },
    methods: {
        addNew: function() {
           this.items.push({message:this.newmessage,id:this.currentId});
           this.currentId++;
           this.newmessage="";
        },
        remove: function(index) {
            this.items.splice(index,1);
        }
    }
}
</script>
