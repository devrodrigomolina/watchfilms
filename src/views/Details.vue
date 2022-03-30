<template>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequatur sequi pariatur earum, dolores dicta, aliquid consectetur similique quaerat rem facilis. Aliquam praesentium laboriosam totam, et dolorum est dolores saepe.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequatur sequi pariatur earum, dolores dicta, aliquid consectetur similique quaerat rem facilis. Aliquam praesentium laboriosam totam, et dolorum est dolores saepe.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequatur sequi pariatur earum, dolores dicta, aliquid consectetur similique quaerat rem facilis. Aliquam praesentium laboriosam totam, et dolorum est dolores saepe.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequatur sequi pariatur earum, dolores dicta, aliquid consectetur similique quaerat rem facilis. Aliquam praesentium laboriosam totam, et dolorum est dolores saepe.</p>
  </div>
 
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      infosFilm: []
    }
  },
  methods: {
    getInfosFilm(id) {    
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e161437dd0afeb088fc7bc77be4d32bc`)
      .then(response => {
      this.$router.push('/details')
      this.infosFilm.push(response.data)
    })
    },
  },
  mounted() {
    console.log('a', this.route.params)
  }
}
</script>

<style>

</style>