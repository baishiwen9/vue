
<template>
  <div class="content-wrap">
    <h3 class="title">
      <span>{{ title }}</span>
    </h3>
    <p>解释：每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的</p>
    <br />

    <div class="article-list">
        <p class="item-title">1.  创建vue实例</p>
        <Code code="
            var vm = new Vue({
                // 选项
            })
            //vm (ViewModel 的缩写) 
        " />
        <div class="code-desc">
            当创建一个 Vue 实例时，你可以传入一个选项对象。
            <br />
            一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。
        </div>
    </div>

    <div class="article-list">
        <p class="item-title">2.  数据与方法</p>
        <div class="code-desc">
            当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
        </div>
        <Code code="
            // 数据对象
            var data = { a: 1 }

            // 该对象被加入到一个 Vue 实例中
            var vm = new Vue({
              data: data
            });

            // 获得这个实例上的 property
            // 返回源数据中对应的字段
            vm.a == data.a // => true

            // 设置 property 也会影响到原始数据
            vm.a = 2
            data.a // => 2

            // ……反之亦然
            data.a = 3
            vm.a // => 3
        " />
        <div class="code-desc">
            当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。
            <br />
            也就是说如果你添加一个新的 property，那么对 b 的改动将不会触发任何视图的更新。
        </div>
        <div class="code-desc mark">
            这里唯一的例外是使用 Object.freeze()，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化。
        </div>

        <Code code="
            var obj = {
              foo: 'bar'
            }

            Object.freeze(obj)

            new Vue({
              el: '#app',
               <!-- 这里的 `foo` 改变不会更新视图!!!!!！ -->
              data: obj
            })
        " />
        
    </div>
    

    <div class="article-list">
        <p class="item-title">3.  vue实例暴露的属性和方法</p>
        <div class="code-desc">
            vue实例暴露的属性和方法，它们都有前缀 $，以便与用户定义的 property 区分开来。
            <br />
            一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。
        </div>
        <Code code="
            var data = { a: 1 }
            var vm = new Vue({
              el: '#example',
              data: data
            })

            vm.$data === data // => true
            vm.$el === document.getElementById('example') // => true

            // $watch 是一个实例方法
            vm.$watch('a', function (newValue, oldValue) {
              // 这个回调将在 `vm.a` 改变后调用
            })
        " />
        <div class="code-desc">
            当创建一个 Vue 实例时，你可以传入一个选项对象。
            <br />
            一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成。
        </div>
    </div>


    

  </div>
</template>

<script>
import Code from '../../Code/index.vue';
import './../../comm/articleTemplate.css';
export default {
  name: 'AboutVue',
  components: {
    Code,
  },
  props: {
    title: String
  }
}
</script>
