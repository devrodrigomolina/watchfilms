<template>
  <div class="container">
    <div class="bg-inpt">
      <div class="infos-inpt">
        <h1>Bem-vindo(a).</h1>
        <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
      </div>
  
      <input type="text" name="" id="" placeholder="Pesquise seu filme aqui" v-model="query" @keyup='searchFilm(query)'>

      <div class="films-search" v-if="query"> 
        <div class="results" v-for="result in results" :key="result.id">
          <img :src="'http://image.tmdb.org/t/p/w500/' + result.poster_path" >
          <p>{{result.title}}</p>
        </div>
      </div>
    </div>


    <h1 class="title-popular">Filmes populares</h1>
    <div class="popular-filmes">
      <div class="cards-films" v-for="result2 in recomendedFilms.results" :key="result2.id">
        <img :src="'http://image.tmdb.org/t/p/w500/' + result2.poster_path" alt="">
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
      recomendedFilms: ''
    }
  },
  methods: {
    searchFilm(query) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e161437dd0afeb088fc7bc77be4d32bc&query=${query}`)
      .then(response => {
        this.results = response.data.results
      })
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

<style lang="scss">
.container {
  max-width: 1600px;
  margin: 0 auto;
  box-shadow: 0 14px 18px rgba(0, 0, 0, 0.2);
  .bg-inpt {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 1600px;
    padding-top: 150px;
    margin: 0 auto;
    height: 600px;
    background-image: url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/sfjqJDmNqMIImO5khiddb9TARvO.jpg');
    .infos-inpt {
      margin-left: 50px;
  
      color: white;
      font-size: 1.3rem;
    }
    input {
      margin: 40px auto 0;
      max-width: 1500px;
      width: 100%;
      outline: none;
      border: none;
      border-radius: 30px;
      height: 45px;
      font-size: 1.3rem;
      padding-left: 15px;
      
    }
    .films-search {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 1470px;
      height: 200px;
      margin: 0 auto;
      box-shadow: 0 14px 18px rgba(0, 0, 0, 0.336);
      overflow-x: hidden;
      background: rgb(255, 255, 255);
      border: 1px solid red;
  
      .results {
        display: flex;
        img {
          padding-left: 20px;
          width: 50px;
        }
        p {
          font-size: 1rem;
          padding-left: 20px;
          width: 100%;
        }

      }
    }
  }

  .title-popular {
    margin: 30px 0;
    padding-left: 20px;
  }
  .popular-filmes {
    display: grid;
    grid-template-columns: 230px 230px 230px 230px 230px 230px;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-items: center;
    img {
      width: 200px;
    }
    p {
      max-width: 200px;
    }
  }
}
</style>