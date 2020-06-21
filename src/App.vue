<template>
  <div id="app">
      <Header />
      <div class="vue-learning-content">
          <router-view></router-view>
      </div>
      <Footer />
  </div>
</template>


<script>
  import Header from './components/Header/index';
  import Footer from './components/Footer/index';

  export default {
    name: 'app',
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  html {
    font-size: 14px;
    min-width: 1280px;
  }
  body {
    background: #fefefe;
    height: auto;
    min-height: 100%;
  }
  .vue-learning-content{
    margin-top: 60px;
  }
</style>

