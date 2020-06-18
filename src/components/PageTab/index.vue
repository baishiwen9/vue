<template>
    <div id="page-tab-wrap">
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane 
                v-for="list in tabList" 
                v-bind:key="list.tag"
                label="list.title" 
            >
                <div v-if="list.comp === 'Zhiling'">
                    <Zhiling title="指令模块学习" />
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import Zhiling from '../Zhiling/index.vue';

  export default {
    name: 'PageTab',
    components: {
        Zhiling,
    },
    data() {
      return {
        tabPosition: 'left',
        tabList: [
            {
                tag: 'v1.0.0',
                title: '指令',
                comp: 'Zhiling',
            },
            {
                tag: 'v1.0.1',
                title: '数据绑定',
                comp: 'Zhiling-1',
            },
        ]
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