<template>
    <div class="code-wrap">
        <div class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>
        </div>
        <div class="code-type" v-if="!type || type === 'js'">js</div>
        <div class="code-type" v-if="type === 'html'">html</div>
        <div class="code-type" v-if="type === 'css'">css</div>
        <div class="code-type" v-if="type === 'vue'">vue</div>
        <div class="code-text">
            <pre><code>{{ code }}</code></pre>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Code',
    props: {
        code: String,
        type: String,
    }
}
</script>

<style scoped>
.code-wrap{
    width: 100%;
    height: auto;
    background: #000;
    border-radius: 8px;
    position: relative;
    padding: 12px;
    box-sizing: border-box;
    overflow-x: auto;
}
.btn{
    position: absolute;
    left: 8px;
    top: 8px;
}
.code-text{
    margin-top: 20px;
    width: 100%;
    height: auto;
    color: #fff;
    font-size: 16px;
    text-align: left;
}
.code-type{
    color: red;
    position: absolute;
    right: 8px;
    top: 8px;
}

</style>