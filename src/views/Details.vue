<template>
  <div>
    <div v-for="infos in infosFilm" :key="infos.id">
      <div class="container">
        <div class="infos-film">
          {{infos}}
        </div>
        <div class="img-fundo">
          <img :src="`http://image.tmdb.org/t/p/w500/${infos.backdrop_path}`" alt="">
        </div>
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

<style lang="scss">
.container {

  .infos-film {
    position: absolute;
  }
  .img-fundo{
    width: 100%;
    img {
      filter: blur(4px);
    }
  }
}
</style>