<template>
  <div id="app">
    <Header/>
    <Section/>
    <Details/>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Section from './components/Section.vue'
import Details from './views/Details.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Section,
    Details
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
