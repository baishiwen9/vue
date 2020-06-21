<template>
  <div id="home-page">
    <PageTab pageType='home' />
  </div>
</template>

<script>
import PageTab from '../../components/PageTab/index.vue';

export default {
  name: 'Home',
  components: {
    PageTab,
  }
}
</script>
