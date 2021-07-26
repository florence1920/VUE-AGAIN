//vue, vue-router import
import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '@/views/NewsView.vue';
import AskView from '@/views/AskView.vue';
import JobsView from '@/views/JobsView.vue';
//플러그인 등록
Vue.use(VueRouter);

//VueRouter 인스턴스 생성하기
export const router = new VueRouter({
    mode:'history',
    routes :[
        {
            path:'/',
            redirect:'/news'
        },
        {
            path:'/news',
            component:NewsView
        },
        {
            path:'/jobs',
            component:JobsView
        },
        {
            path:'/ask',
            component:AskView
        },

    ]
})