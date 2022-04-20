<template>
  <div class="container-header">
    <nav class="nav-header">
      <div class="logo">
        <router-link to="/">
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="">
        </router-link>
      </div>
      <div class="nav">
        <router-link to="/films">Filmes</router-link>
        <router-link to="/series">Séries</router-link>
        <router-link to="/pessoas">Pessoas</router-link>
        <router-link to="/mais">Mais</router-link>
      </div>
      <div class="itens">
        <span>+</span>
        <span>PT-BR</span>
        <span>Sino</span>
        <button class="account" @click="openAcc">@</button>
      </div>
    </nav>
  </div>
</template>

<script>
import { api } from '@/services/api.js'

export default {
  name: 'Header',
  data() {
    return {
      account: ''
    }
  },
  methods: {
    async openAcc() {
      let response = await api.get(`/account?api_key=e161437dd0afeb088fc7bc77be4d32bc`)
      this.account = response
    }
  }
}
</script>

<style lang="scss"  src="./header.scss">
</style>