<template>
  <div class="container" v-if="searchResults.length >= 1">
    <div class="infos" v-for="result in searchResults" :key="result.id">
      <img :src="`http://image.tmdb.org/t/p/w500/${result.poster_path}`" alt="">
      <div class="infos-text">
        <h3 class="title">{{result.original_title}}</h3>
        <p class="date">{{result.release_date}}</p>
        <p class="overview">{{result.overview}}</p>
      </div>
    </div>
  </div>
  <div class="error" v-else>
    <h3>Ops.. Não encontrambos o filme que está procurando</h3>
  </div>
</template>

<script>
import { api } from '@/services/api.js'

export default {
  data() {
    return {
      searchResults: ''
    }
  },
  methods: {
    async btnSearch(query) {
      let response = await api.get(`/search/movie?api_key=e161437dd0afeb088fc7bc77be4d32bc&query=${query}`)
      this.searchResults = response.data.results
    },
  },
  mounted() {
    this.btnSearch(this.$route.query.query)
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 20px;
  max-width: 1500px;
  margin: 0 auto;
  transition: all .3s;
  .infos {
    display: flex;
    padding-bottom: 10px;
    img {
      width: 90px;
      border-radius: 10px 0px 0px 10px;
    }
    .infos-text {
      width: 100%;
      padding: 10px;
      box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.171);
      .title {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 1rem;
        font-weight: 600;
        line-height: 15px;
      }
      .date {
        padding-top: 4px;
        color: rgba(0, 0, 0, 0.479);
        font-size: 11px;
      }
      .overview {
        padding-top: 30px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
    }
    &:hover {
      
      color: #0a5da1;
    }
  }
}
.error {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
</style>