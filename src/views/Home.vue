<template>
  <div class="container">
    <div class="bg-inpt">
      <div class="infos-inpt">
        <h1>Bem-vindo(a).</h1>
        <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
      </div>

      <div class="input-search">
        <input type="text" name="" id="" placeholder="Pesquisar por um filme, uma série televisiva, uma pessoa..." v-model="query" @keyup='searchFilm(query)'>
        <button>Search</button>
      </div>
    
      <div class="films-search" v-if="query"> 
        <div class="results" v-for="result in results" :key="result.id">
          <img :src="`http://image.tmdb.org/t/p/w500/${result.poster_path}`">
          <p @click="getInfosFilm(result.id)">{{result.title}}</p>
          <p>{{result.id}}</p>
        </div>
      </div>
    </div>

    <h1 class="title-popular">Os mais populares</h1>
    <div class="popular-filmes">
      <div class="cards-films" v-for="result2 in recomendedFilms.results" :key="result2.id">
        <img @click="getInfosFilm(result2.id)" :src="`http://image.tmdb.org/t/p/w500/${result2.poster_path}`" alt="">
        <p>{{result2.original_title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      query: '',
      results: '',
      filmes: null,
      recomendedFilms: '',
      id: '',
    }
  },
  methods: {
    searchFilm(query) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e161437dd0afeb088fc7bc77be4d32bc&query=${query}`)
      .then(response => {
        this.results = response.data.results
      })
    },
    getInfosFilm(id) {
      this.$router.push({ name: 'details', params: { id } })
    },
    showPopulars() {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e161437dd0afeb088fc7bc77be4d32bc&language=en-US&page=1')
      .then(response => {
        this.recomendedFilms = response.data
      })
    },
  },
  created(){
    this.showPopulars()
  }
}
</script>

<style scoped lang="scss" src="@/scss/home.scss">
</style>