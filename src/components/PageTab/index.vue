<template>
    <div id="page-tab-wrap" v-bind:style="{minHeight: minH + 'px'}">
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane 
                v-for="list in tabList" 
                v-bind:key="list.tag"
                label="list.title" 
            >
                <div v-if="list.comp === 'Zhiling'">
                    <Zhiling title="指令模块" />
                </div>
                <div v-if="list.comp === 'vue'">
                    <AboutVue title="Vue实例模块" />
                </div>
                <div v-if="list.comp === 'lifecycle'">
                    <LifeCycle title="Vue生命周期" />
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import Zhiling from '../Detail/Zhiling/index.vue';
import AboutVue from '../Detail/AboutVue/index.vue';
import LifeCycle from '../Detail/LifeCycle/index.vue';
import { styleConfig } from './../../config/index.js';


  export default {
    name: 'PageTab',
    components: {
        Zhiling,
        AboutVue,
        LifeCycle,
    },
    data() {
      return {
        tabPosition: 'left',
        tabList: [
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
</style>