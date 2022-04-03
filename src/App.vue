<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}
</style>
