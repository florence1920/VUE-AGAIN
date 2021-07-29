import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '@/api/index.js';
import { fetchAskList } from '@/api/index.js';
import { fetchJobsList } from '@/api/index.js';
import { fetchCommentItem } from '@/api/index.js';
import { fetchUserInfo } from '@/api/index.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news:[],
        ask:[],
        jobs:[],
        item:{},
        user:{}
    },
    getters:{
        fetchedItem(state){
            return state.item;
        }
    },
    mutations:{
        SET_NEWS(state, news){
            state.news = news;
        },
        SET_ASK(state, ask){
            state.ask = ask;
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        },
        SET_ITEM(state, item){
            state.item = item;
        },
        SET_USER(state, user){
            state.user = user;
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
        },
        FETCH_JOBS(context){
            fetchJobsList()
                .then( response => {
                    console.log(response.data);
                    context.commit('SET_JOBS',response.data);
                })
                .catch( error => {
                    console.log(error);
                })
        },
        FETCH_ITEM(context,id){
            fetchCommentItem(id)
            .then(response => {
                context.commit('SET_ITEM',response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        FETCH_USER(context,name){
            fetchUserInfo(name)
            .then(response => {
                context.commit('SET_USER', response.data);
            })
            .catch (error => {
                console.log(error);
            })
        }
    }

})