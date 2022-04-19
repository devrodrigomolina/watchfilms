<template>
  <div v-if="trailer" class="modal" @click="closeModal">
    <div class="modal-container">
      <div class="modal-trailer">
        <iframe width="960" height="515" :src="`https://www.youtube.com/embed/${trailer[0].key}?autoplay=1`" :title="trailer.name" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalTrailer',
  props: ['trailer'],
  methods: {
    closeModal({ target, currentTarget}) {
      target === currentTarget ? this.trailer = false : ''
    }
  }
}
</script>

<style lang="scss" scoped src="@/scss/modalTrailer.scss">
</style>