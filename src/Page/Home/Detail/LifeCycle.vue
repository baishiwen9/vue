
<template>
  <div class="content-wrap">
    <h3 class="title">
      <span>{{ title }}</span>
    </h3>
    <p>解释：每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。</p>
    <br />

    <div class="article-list">
        <p class="item-title">1. vue生命周期图示</p>
        <div class="img-wrap">
            <img class="article-img" src="https://cn.vuejs.org/images/lifecycle.png" alt="" />
        </div>
        <Code />
    </div>

  </div>
</template>

<script>
import Code from '../../../components/Code/index';
import '../../../components/comm/articleTemplate.css';
export default {
  name: 'LifeCycle',
  components: {
    Code,
  },
  props: {
    title: String
  }
}
</script>
