<template>
    <div id="page-header">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-nav"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="0" disabled>
              <div class="blog">
                  <img class="logo" src="./../../assets/logo.jpg"/>
                  <span class="blog-title">VUE学习笔记</span>
              </div>
            </el-menu-item>
            <el-menu-item index="1">学习中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">笔记中心</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">学习计划</el-menu-item>
            <el-menu-item index="4">个人计划</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.el-menu-nav{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
}
.el-menu-item.is-disabled{
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    cursor: auto;
    opacity:1;
}
.blog{
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.blog-title{
  margin-left: 12px;
}
</style>