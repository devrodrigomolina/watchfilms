<template>
  <div class="footer">
    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="">
    <p>Desenvolvido por Rodrigo Molina</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss" >
@import '@/assets/scss/_colors.scss';

.footer {
  width: 100vw;
  height: 200px;
  background: $principal-color;
  margin: 60px 0 0 -17px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $white-color;
  position: absolute;
  img {
    width: 150px;
    padding: 30px;
  }
}
</style>