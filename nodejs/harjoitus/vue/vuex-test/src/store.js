import Vue from 'vue';
import Vuex from 'vuex';

const state = {
    shoppingList: []
}

const mutations = {
    addToList(state,shoppingItem) {
        state.shoppingList.push(shoppingItem);
    },
    removeFromList(state,index) {
        state.shoppingList.splice(index,1);
    },
    editItem(state,shoppingItem,index){
        state.shoppingList.splice(index,1,{type:shoppingItem.type, price:shoppingItem.price, count:shoppingItem.count});

    }
}

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations
});