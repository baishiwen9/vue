<template>
  <div id="app">
    <Header />
    <PageTab />
    <!-- <LeftNav /> -->
    <Footer />
  </div>
</template>

<script>
import PageTab from './components/PageTab/index.vue';
// import LeftNav from './components/LeftNav/index.vue';
import Header from './components/Header/index.vue';
import Footer from './components/Footer/index.vue';



export default {
  name: 'App',
  components: {
    PageTab,
    Header,
    Footer,
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
