<template>
  <nav class="nav-header">
    <div class="logo">
      <router-link to="/">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="">
      </router-link>
    </div>
    <ul>
      <router-link to="/filmes"><li>Filmes</li></router-link>
      <router-link to="/series"><li>Séries</li></router-link>
      <router-link to="/pessoas"><li>Pessoas</li></router-link>
      <router-link to="/mais"><li>Mais</li></router-link>
    </ul>
    <div class="itens">
      <span>+</span>
      <span>PT-BR</span>
      <span>Sino</span>
      <span>Perfil</span>
      <span>Search</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  background: rgb(37, 21, 97);
  text-transform: uppercase;
  padding: 15px;
  .logo img {
    width: 180px;
  }
  ul {
    width: 300px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    li {
      color: white;
    }
  }
  .itens {    
    color: white;
    span {
      padding: 12px;
    }
  }
}
</style>