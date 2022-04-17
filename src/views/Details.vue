<template>
  <div>
    <div class="container-geral" v-for="infos in infosFilm" :key="infos.id">
      <div class="container">
        <div class="container-infos">
          <div class="img-film">
            <div class="trailer">
              <button @click="trailerFilm(infos.id)">▶ Trailer</button>
            </div>
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

      <div class="titulo-elenc">
        <h1>Elenco Principal</h1>
      </div>
      <div class="elenco">     
        <div class="infos-elenc" v-for="elenc in elencFilm[0].cast" :key="elenc.id">
          <img :src="`http://image.tmdb.org/t/p/w500/${elenc.profile_path}`" alt="">
          <p class="elenc-name">{{elenc.original_name}}</p>
          <p class="elenc-chatacter">{{elenc.character}}</p>
        </div>
      </div>

    </div>
   <div v-if="movieTrailer" class="container-video">
      <div  class="modal-trailer">
        <iframe width="960" height="515" :src="`https://www.youtube.com/embed/${movieTrailer[0].key}?autoplay=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
   </div>
  </div>
 
</template>

<script>
import { api } from '@/services/api.js'

export default {
  name: 'Details',
  data() {
    return {
      infosFilm: [],
      elencFilm: [],
      movieTrailer: ''
    }
  },
  methods: {
    async getInfosFilm(movie_id) {
      let response = await api.get(`/movie/${movie_id}?&language=pt-br`)      
      this.infosFilm.push(response.data)
    },
    async getElencFilm(movie_id) {
      let response = await api.get(`/movie/${movie_id}/credits?&language=en-US`)
      this.elencFilm.push(response.data)
    },
    async trailerFilm(movie_id) {
      let response = await api.get(`/movie/${movie_id}/videos?&language=en-US`)
      console.log(response.data.results)
      this.movieTrailer = response.data.results
    }
  },
  mounted() {
    this.getInfosFilm(this.$route.params.id)
    this.getElencFilm(this.$route.params.id)
  }
}
</script>

<style scoped lang="scss" src="@/scss/details.scss">

</style>