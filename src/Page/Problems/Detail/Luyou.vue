
<template>
  <div class="content-wrap">
    <h3 class="title">
      <span>{{ title }}</span>
    </h3>

    <div class="article-list">
        <p class="item-title">1.  vue路由简介及使用流程</p>
        <div class="code-desc">
            参考文章：<br />
            https://router.vuejs.org/zh/guide/
            <br />
            https://segmentfault.com/a/1190000014441507
        </div>
        <p>定义一个Demo组件: Demo.vue</p>
        <Code code="
        <template>
            <div>hello world, i am Demo</div>
        </template>
        <script>
            export default {
                name: 'Demo'
            }
        </script>
        " />
        <p>配置路由文件: router.js</p>
        <Code code="
        import Vue from 'vue';
        import Router from 'vue-router';
        import Demo from 'components/Demo';

        Vue.use(Router);

        export default new Router({
            routes: [
                {
                    path: '/',
                    component: Demo
                },
                {
                    path: '/demo',
                    component: Demo
                }
            ]
        })
        " />

        <p>配置路由插座<router-view></router-view>: App.vue</p>
        <Code code="
        <template>
            <div>xxx</div>
            <router-view></router-view>
            <div>xxx</div>
        </template>
        <script>
            export default{
                name: 'App',
            }
        </sciprt>
        " />
        <p>路由文件注入到main.js文件中: main.js</p>
        <Code code="
        import Vue from 'vue';
        import Router from 'vue-router';
        import App from './App';
        import router from './router/index';

        Vue.config.productionTip = false;
        new Vue({
            el: '#app',
            router,
            render(h){
                return h(App);
            }
        })
        " />
        <br />
        <br />
        <br />
        <p class="item-title">2.  配置路由的跳转, 路由的跳转使用标签router-link</p>
        <br />
        <p>知道路径的跳转：</p>
        <Code code="
        <ul>
            <li><router-link to='/demo'>demo页面</router-link></li>
        </ul>
        <!-- 定义路由插座 -->
        <router-view></router-view>
        " />
        <p>to是通过绑定数据到上面：</p>
        <Code code="
        <ul>
            <li><router-link to='/demo'>demo页面</router-link></li>
            <li><router-link :to='demo1'>demo1页面</router-link></li>
        </ul>
        <!-- 定义路由插座 -->
        <router-view></router-view>
        <script>
        export default{
            name:'app',
            data(){
                return{
                    title:'我是项目主入口',
                    demo1:'/demo1'
                }
            }
        }
        </script>

        " />
    </div>

  </div>
</template>

<script>
import Code from '../../../components/Code/index';
import '../../../components/comm/articleTemplate.css';
export default {
  name: 'Luyou',
  components: {
    Code,
  },
  props: {
    title: String
  }
}
</script>
