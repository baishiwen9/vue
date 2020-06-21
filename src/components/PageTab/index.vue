<template>
    <div id="page-tab-wrap" v-bind:style="{minHeight: minH + 'px'}">
        <div v-if="pageType === 'home'">
            <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="指令">
                    <Zhiling title="指令模块" />
                </el-tab-pane>
                <el-tab-pane label="vue实例">
                    <AboutVue title="Vue实例模块" />
                </el-tab-pane>
                <el-tab-pane label="生命周期" >
                    <LifeCycle title="生命周期" />
                </el-tab-pane>
                <el-tab-pane label="模板语法" >
                </el-tab-pane>
            </el-tabs>
        </div>

        <div v-if="pageType === 'problems'">
            <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="路由">
                    <Luyou title="路由" />
                </el-tab-pane>
                
            </el-tabs>
        </div>
    </div>
</template>
<script>
import Zhiling from '../../Page/Home/Detail/Zhiling';
import AboutVue from '../../Page/Home/Detail/AboutVue';
import LifeCycle from '../../Page/Home/Detail/LifeCycle';
import { styleConfig } from './../../config/index.js';


import Luyou from '../../Page/Problems/Detail/Luyou';

  export default {
    name: 'PageTab',
    props: {
        pageType: String,
    },
    components: {
        Zhiling,
        AboutVue,
        LifeCycle,

        Luyou,
    },
    data() {
      return {
        tabPosition: 'left',
        tabList_home: [
            {
                title: '指令',
                comp: 'Zhiling',
            },
            {
                title: 'vue实例',
                comp: 'vue',
            },
            {
                title: '生命周期',
                comp: 'lifecycle',
            },
            {
                title: '模板语法',
                comp: 'template',
            },
        ],
        minH: window.innerHeight - 60 - styleConfig.footerHeight,
      };
    }
  };
</script>
<style>
#page-tab-wrap{
    margin-top: 60px;
}
#page-tab-wrap .el-tabs .el-tabs__header.is-left{
    position: fixed;
    left: 0;
    top: 60px;
}
#page-tab-wrap .el-tabs__content{
    margin-left: 160px;
}
.el-tabs__nav.is-left{
    width: 150px;
}
#page-tab-wrap .el-tabs--left .el-tabs__item.is-left{
    text-align: center;
}
.content-wrap h3.title{
    text-align: center;
}
</style>