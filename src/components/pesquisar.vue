<template>
  <div class="container">
    <h3 class="jumbotron"></h3>
    <h3 class="text-center">Procurar por um filme</h3>
    <form id="searchForm">
      <input type="text" v-model="texto" class="form-control" 
      id="searchtext" placeholder="digite o nome do filme"> 
    </form>
    {{texto}}
  </div>
</template>

<script>
import moveApi from '../services/movieApi'
export default {
  name: "pesquisar",
  data() {
    return {
      texto: '',
      filmes: []
    }
  },
  // props: ["texto"],

  watch: {
    texto () {
      moveApi.obterFilme(this.texto, resp => {
        this.filmes = resp.data.Search
        console.log(this.filmes)
      }) 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imagem-quadrinho {
  width: 120px;
}
.card-default {
  padding: 28px;
  margin: 18px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #fff !important;
}
</style>
