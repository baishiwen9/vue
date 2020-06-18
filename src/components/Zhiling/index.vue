<template>
  <div class="content-wrap">
    <h3 class="title">
      <span>{{ title }}</span>
    </h3>
    <p>解释：指令 (Directives) 是带有 v- 前缀的特殊属性</p>
    <p>作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM</p>
    <br />

    <p>常用指令如下：</p>
    <p class="item-title">1.  v-text</p>
    <ul>
      <li>作用：更新元素的 textContent</li>
      <li>语法：v-text='msg'</li>
    </ul>
    <Code code="
        <h3 v-text='msg'></h3>
    " />

    <p class="item-title">2.  v-html </p>
    <ul>
      <li>作用：更新元素的 innerHTM</li>
      <li>语法：v-html='msg'</li>
    </ul>
    <Code code="
        <h3 v-html='msg'></h3>
    " />

    <p class="item-title">3.  v-bind</p>
    <ul>
      <li>作用：更新元素的 innerHTML，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM</li>
      <li>语法：v-bind:title="msg"</li>
      <li>简写：:title="msg"</li>
      <li>class:  v-bind:class="{active: true}"</li>
      <li>class:  v-bind:class="['active',  'show']"</li>
      <li>class:  v-bind:class="[{active: true},  'show']"</li>

      <li>style:  v-bind:style="{color: redColor, fontSize: fontSize + 'px'}"</li>
      <li>style:  多个样式的设置：v-bind:style="[baseStyle, defaultStyle]"</li>

    </ul>
    <Code code="
        <a v-bind:href='url'></a>
        <a :href='url'></a>
    " />

    <p class="item-title">4.  v-on</p>
    <ul>
      <li>作用: 绑定事件</li>
      <li>语法1：v-on:click="say"</li>
      <li>语法2：v-on:click="say('参数', $event)"</li>
      <li>简写：@click="say"</li>
      <li>说明：绑定的事件从methods中获取</li>
    </ul>
    <Code code="
        <a v-on:click='todo'></a>
        <script>
          var vue = new Vue({
            el: '#app',
            methods: {
              todo: function(str) {
                  console.log(str);
              }
            }
          })
        </script>
    " />

    <p class="item-title">5.  事件修饰符</p>
    <ul>
        <li>.stop 阻止冒泡，调用 event.stopPropagation()</li>
        <li>.prevent 阻止默认事件，调用 event.preventDefault()</li>
        <li>.capture 添加事件侦听器时使用事件捕获模式</li>
        <li>.self 只当事件在该元素本身（比如不是子元素）触发时触发回调</li>
        <li>.once 事件只触发一次</li>
    </ul>

    <p class="item-title">6.  v-model </p>
    <ul>
        <li>作用：在表单元素上创建双向数据绑定</li>
        <li>说明：监听用户的输入事件以更新数据</li>
    </ul>
    <Code code="
        <input v-model='msg' />
        <p>message is: { {msg } }</p>
    " />

    <p class="item-title">7.  v-for </p>
    <ul>
        <li>作用：基于源数据多次渲染元素或模板块</li>
        <li>语法：v-for="(item, index) in datas" v-bind:key="item.id"</li>
        <li>语法：v-for="(item, key, index) in datas" v-bind:key="item.id"</li>
        <li>语法：v-for="(item, index) in datas" v-bind:key="item.id"</li>
        <li>推荐：使用 v-for 的时候提供 key 属性，以获得性能提升。</li>
        <li>说明：使用 key，VUE会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。</li>
    </ul>
    <Code code="
        <div v-for='item in datas'>{ {item.title} }</div>
        <p>message is: { {msg } }</p>
    " />


    <p class="item-title">8.  v-if  </p>
    <ul>
        <li>作用：条件渲染， 根据表达式的值的真假条件，销毁或重建元素</li>
        <li>语法：v-if="show"</li>
    </ul>
    <Code code="
        <div v-if='show'>show为true时展示，show为false销毁</div>
    " />

    <p class="item-title">9.  v-show </p>
    <ul>
        <li>作用：条件渲染， 根据表达式之真假值，切换元素的 display CSS 属性</li>
        <li>语法：v-show="show"</li>
    </ul>
    <Code code="
        <div v-show='show'>show为true时展示，show为false隐藏</div>
    " />


    <p class="item-title">10.  v-cloak </p>
    <ul>
        <li>作用：提升用户体验</li>
        <li>说明：这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。</li>
        <li>语法：v-cloak</li>
    </ul>
    <Code code="
        <div v-cloak></div>
    " />

    <p class="item-title">11.  v-pre </p>
    <ul>
        <li>作用：提升性能</li>
        <li>说明：跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。</li>
        <li>语法：v-pre</li>
    </ul>
    <Code code="
        <div v-pre></div>
    " />


    <p class="item-title">12.  v-once </p>
    <ul>
        <li>作用：提升性能</li>
        <li>说明：只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新</li>
        <li>语法：v-once</li>
    </ul>
    <Code code="
        <div v-once></div>
    " />

  </div>
</template>

<script>
import Code from '../Code/index.vue';
export default {
  name: 'Zhiling',
  components: {
    Code,
  },
  props: {
    title: String
  }
}
</script>

<style scoped>
h3 {
  margin: 30px 0 0;
}
ul {
  /* padding: 0; */
}
li {
  /* display: inline-block; */
  /* margin: 0 10px; */
  text-align: left;
}
a {
  color: #42b983;
}
p{
  text-align: left;
  line-height: 1.2;
}
.content-wrap{
  padding: 16px;
  box-sizing: border-box;
}
.title{
  margin: 30px 0;
}
.title span{
  box-shadow: 0px 4px 0px red;
}
.item-title{
  position: relative;
  font-size: 18px;
  font-weight: 500;
}
.item-title::after{
    content: "";
    display: inline-block;
    width: 100px;
    height: 4px;
    background: red;
    position: absolute;
    bottom: -8px;
    left: 0;
    border-radius: 4px;
}
</style>
