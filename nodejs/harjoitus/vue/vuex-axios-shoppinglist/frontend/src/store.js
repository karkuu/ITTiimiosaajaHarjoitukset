import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const state = {
    shoppingList: []
}

const mutations = {
   updateList(shoppingList) {
       state.shoppingList = shoppingList
   }
}

const actions = {
    addToList({commit},newItem)
    {
        axios.post("http://localhost:3001/api/shoppinglist", newItem).
        then (function (response) {
            if (response.statusText == "OK") {
                axios.get("http://localhost:3001/api/shoppinglist").
                then (function(response) {
                    console.log("List from backend");
                    commit("updateList",response.data);
                });
            }
        });
    },
    removeFromList({commit},id)
    {
        axios.post("http://localhost:3001/api/shoppinglist/"+id).
        then (function(response) {
            if (response.statusText == "OK") {
                axios.get("http://localhost:3001/api/shoppinglist").
                then (function(response) {
                    console.log("List from backend delete");
                    commit("updateList",response.data);
                });
            }
        });
    }
}

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions
});