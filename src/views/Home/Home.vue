<template>
  <div class="container">
    <div class="bg-inpt">
      <div class="infos-inpt">
        <h1>Bem-vindo(a).</h1>
        <h2>Milhões de filmes e séries para descobrir. Explore já.</h2>
      </div>

      <div class="input-search">
        <input type="text" name="" id="" placeholder="Pesquisar por um filme, uma série televisiva, uma pessoa..." v-model="query" v-on:keyup.enter="btnSearch(query)" @keyup='searchFilm(query)'>
        <button @click="btnSearch(query)">Search</button>
        {{results2}}
      </div>

      <div class="films-search" v-if="query">
        <transition-group name="anim" >
          <div class="results" v-for="result in results" :key="result.id">
            <img :src="`http://image.tmdb.org/t/p/w500/${result.poster_path}`">
            <p @click="getInfosFilm(result.id)">{{result.title}}</p>
            
          </div>
        </transition-group>
      </div>
    </div>
    
    <div class="selects">
      <h1 class="title-popular">Os mais populares</h1>
      <div class="botoes">
        <button :class="{actived: !active}" @click="showPopulars()">Populares</button>
        <button :class="{actived: active}" @click="showEvaluated()">Mais Avaliados</button>
      </div>
    </div>

    <div class="popular-filmes">
      <transition-group name="anim" class="animation-anim">
        <div class="cards-films"  v-for="result2 in objFinal" :key="result2.id" > <!-- MEXER AQUI =D -->
          <img @click="getInfosFilm(result2.id)" :src="`http://image.tmdb.org/t/p/w500/${result2.poster_path}`" alt="">
          <p>{{result2.original_title}}</p>
          <p class="nota">★ {{result2.vote_average}}</p>
          
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { api } from '@/services/api.js'

export default {
  data() {
    return {
      query: '',
      results: '',
      results2: '',
      showPopular: null,
      objFinal: null,
      objsCategory: {popularsFilms: null, evaluatedFilms: null,},
      id: '',
      active: null,
    }
  },
  watch: {
    showPopular(value) {
      value == true ? this.objFinal = this.objsCategory.popularsFilms : this.objFinal = this.objsCategory.evaluatedFilms
    }
  },
  methods: {
    async searchFilm(query) {
      let response = await api.get(`/search/movie?&query=${query}`)
      this.results = response.data.results
    },
    async btnSearch(query) {
      this.$router.push({ name: 'search', query: {query}})
    },
    getInfosFilm(id) {
      this.$router.push({ name: 'details', params: { id } })
    },
    async showEvaluated() {
      this.active = true
      let response = await api.get('/movie/top_rated?&language=en-US&page=1')
      this.showPopular = false
      this.objsCategory.evaluatedFilms = response.data.results
    },
    async showPopulars() {
      this.active = false
      let response = await api.get('/movie/popular?&language=en-US&page=1')
      this.objsCategory.popularsFilms = response.data.results
      this.showPopular = true
    
    },
  },
  mounted(){
    this.showPopulars()
  }
}
</script>

<style scoped lang="scss" src="./home.scss">
</style>