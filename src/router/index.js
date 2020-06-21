import Vue from 'vue'
import Router from 'vue-router';
import Home from '../Page/Home/index';
import Problems from '../Page/Problems/index';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path:'/home',
            component: Home
        },
        {
            path: '/problems',
            component: Problems,
        }
    ]
});
