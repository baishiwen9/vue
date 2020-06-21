<template>
    <div 
        id="page-footer" 
        v-bind:class="{fixedMode: isFixed}"
        v-bind:style="{height: footerHeight + 'px'}"
    >
        <p class="desc">VUE框架个人学习笔记，知识点记录，demo演示</p>
        <p class="tiem">当前时间: {{ time }}</p>
        <p class="author">author@流川</p>
    </div>
</template>


<script>
import { styleConfig } from '../../config/index.js';
export default {
    name: 'Footer',
    data() {
        return {
            time: getTime(),
            isFixed: getPosition(),
            footerHeight: styleConfig.footerHeight,
        }
    },
    created() {
        // setInterval(() => {
        //     this.time = getTime();
        // }, 1000);
    }
}

function getPosition() {
    const appEle = document.querySelector('#app');
    const appHeight = appEle.offsetHeight;
    const winHeight = window.innerHeight;
    if (appHeight > winHeight) {
        return false;
    }
    return true;
}

function getTime() {
    const currentTime = new Date();
    const y = currentTime.getFullYear();
    let m = currentTime.getMonth() + 1;
    let d = currentTime.getDate();
    // let h = currentTime.getHours();
    // let mm = currentTime.getMinutes();
    // let s = currentTime.getSeconds();
    // return `${y}年${format(m)}月${format(d)}日 ${format(h)}:${ format(mm) }:${format(s)}`;
    return `${y}年${format(m)}月${format(d)}日`;
}

function format(num) {
    return num > 10 ? num : '0' + num;
}
</script>

<style lang="less" scoped>
#page-footer{
    width: 100%;
    min-height: 100px;
    background: rgb(84, 92, 100);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size: 16px;
    position: absolute;
}
#page-footer p{
    margin-bottom: 10px;
}
p{
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>