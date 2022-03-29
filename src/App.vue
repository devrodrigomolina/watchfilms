<template>
  <div id="app">
    <Header/>
    <Section/>
    <router-view> 
    </router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Section from './components/Section.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Section
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
