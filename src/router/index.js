import Vue from 'vue'
import VueRouter from 'vue-router' //ʹ��·��ʱ��Ҫ����vue-router
import Home from '../views/Home.vue'


// Ҫ���� vue ʹ�� vueRouter
Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,

    }, ]
})