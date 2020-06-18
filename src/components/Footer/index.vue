<template>
    <div id="page-footer" v-bind:class="{fixedMode: isFixed}">
        <p class="desc">vue个人学习笔记，知识点记录，demo演示</p>
        <p class="tiem">当前时间: {{ time }}</p>
    </div>
</template>


<script>
export default {
    name: 'Footer',
    data() {
        return {
            time: getTime(),
            isFixed: getPosition(),
        }
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
    let h = currentTime.getHours();
    let mm = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    return `${y}年${format(m)}月${format(d)}日 ${format(h)} : ${ format(mm) } : ${format(s)}`;
}

function format(num) {
    return num > 10 ? num : '0' + num;
}
</script>

<style scoped>
#page-footer{
    width: 100%;
    height: 100px;
    background: rgb(84, 92, 100);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size: 16px;
}
/* #page-footer.fixedMode{
    position: fixed;
    left: 0;
    bottom: 0;
} */
p{
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>