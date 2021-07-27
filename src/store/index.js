import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '@/api/index.js';
import { fetchAskList } from '@/api/index.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        ask:[]
    },
    mutations:{
        SET_NEWS(state, news){
            state.news = news;
        },
        SET_ASK(state, ask){
            state.ask = ask;
        }
    },
    actions:{
        FETCH_NEWS(context){
            fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS',response.data);
            })
            .catch(error => {
                console.log(error)
            });
        },
        FETCH_ASK(context){
            fetchAskList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_ASK', response.data)
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

})