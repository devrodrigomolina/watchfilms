<template>
  <div>
    <div class="container-geral" v-for="infos in infosFilm" :key="infos.id">
      <div class="container">
        <div class="container-infos">
          <div class="img-film">
            <img :src="`http://image.tmdb.org/t/p/w500/${infos.poster_path}`" alt="">
          </div>

          <div class="infos-film">
            <div class="titulo">
              <h1>{{infos.title}}</h1>
            </div>

            <div class="infos">
              <p>{{infos.release_date}}</p>
              <p class="genres" v-for="genres in infos.genres" :key="genres.id">
                <a href="#">{{genres.name}}</a>
              </p>
              <p>{{infos.vote_average}}</p>
            </div>
            <div class="sinopse">
              <h2>Sinopse</h2>
              {{infos.overview}}
            </div>
          </div>
        </div>
      </div>

      <div class="img-fundo">
        <div class="color-img"></div>
        <img :src="`http://image.tmdb.org/t/p/w500/${infos.backdrop_path}`" alt="">
      </div>

      <div class="mais-infosfilm" >
        {{infos}}
      </div>

    </div>

  </div>
 
</template>

<script>
import axios from 'axios'

export default {
  name: 'Details',
  data() {
    return {
      infosFilm: []
    }
  },
  methods: {
    getInfosFilm(id) {    
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e161437dd0afeb088fc7bc77be4d32bc&language=pt-br`)
      .then(response => {
        this.infosFilm.push(response.data)
      })
    },
  },
  mounted() {
    this.getInfosFilm(this.$route.params.id)
  }
}
</script>

<style scoped lang="scss" src="@/scss/details.scss">

</style>