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

<style lang="scss" src="@/scss/resultsearch.scss" scoped >

</style>