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
    <div class="selects">
      <h1 class="title-popular">Os mais populares</h1>
      <ul>
        <li @click="showPopulars()">Populares</li>
        <li @click="showEvaluated()">Mais Avaliados</li>
        <li>Para Alugar</li>
        <li>Nos Cinemas</li>
      </ul>
    </div>
    <div class="popular-filmes">
      <div class="cards-films" v-for="result2 in this.a.evaluatedFilms" :key="result2.id"> <!-- MEXER AQUI NESSA PORRA =D -->
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
      a: {popularsFilms: null, evaluatedFilms: null,},
      id: '',
    }
  },
  watch: {

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
    showEvaluated() {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e161437dd0afeb088fc7bc77be4d32bc&language=en-US&page=1')
      .then(response => {
        this.a.evaluatedFilms = response.data.results
      })
    },
    showPopulars() {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e161437dd0afeb088fc7bc77be4d32bc&language=en-US&page=1')
      .then(response => {
        this.a.popularsFilms = response.data.results
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