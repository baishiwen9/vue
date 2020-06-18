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
        ],
        minH: window.innerHeight - 160,
      };
    }
  };
</script>
<style scoped>
#page-tab-wrap{
    margin-top: 60px;
}
#page-tab-wrap .el-tabs el-tabs--left .el-tabs__header.is-left{
    position: fixed;
    left: 0;
    top: 60px;
}
#page-tab-wrap .el-tabs__content{
    margin-left: 90px;
}
</style>