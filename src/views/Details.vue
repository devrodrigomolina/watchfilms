<template>
  <div>
    <div v-for="infos in infosFilm" :key="infos.id">
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
              <p>{{infos.release_date}} -</p>
              <p class="genres" v-for="genres in infos.genres" :key="genres.id">{{genres.name}}</p>
            </div>
            <div class="sinopse">
              {{infos.overview}}
            </div>
          </div>
        </div>




        <div class="img-fundo">
          <div class="color-img"></div>
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

<style scoped lang="scss" >

.container {
  .container-infos {
    width: 1100px;
    height: 600px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 60px;
    position: absolute;
    z-index: 3;
    color: #FFF;
 
    .img-film {
      width: 300px;
      img {
        width: 100%;
      }
    }
    .infos-film {
      width: 600px;
      .titulo {

      }
      .infos {
        width: 220px;
        display: flex;
        justify-content: space-between;
      }
      .sinopse {
        margin-top: 20px;
      }
    }
  }
  .img-fundo{
    width: 100%;
    .color-img {
      position: absolute;
      background: rgba(0, 0, 0, 0.767);
      width: 100%;
      height: 600px;
    }
    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
    }
  }
}
</style>