<template>
    <div class="code-wrap">
        <div class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>
        </div>
        <div class="code-text">
            {{ code }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Code',
    props: {
        code: String
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
</style>