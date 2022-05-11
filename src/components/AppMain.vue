<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Inserire il titolo da ricercare"
            aria-label="Inserire il titolo da ricercare"
            aria-describedby="basic-addon2"
            v-model="inputText"
            @keyup.enter="research"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="research"
            >
              Ricerca
            </button>
          </div>
        </div>
      </div>
      <app-cards :film="movies"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AppCards from '../components/AppCards.vue';

export default {
  components: { AppCards },
  name: "AppMain",
  data() {
    return {
      forExampleOnly: "https://api.themoviedb.org/3/search/movie/?api_key=1e8e3f34ceeb3f42ea36036bcfd6d28f&query=ciao&language=it-IT",
      apiURL: "https://api.themoviedb.org/3/search",
      typeMovie: "/movie/",
      typeSeries: "/tv/",
      apiPASS: "1e8e3f34ceeb3f42ea36036bcfd6d28f",
      inputText: "",
      movies: [],
      series: [],
    };
  },
  methods: {
    research() {
      const queryParams = {
        params: {
          api_key: this.apiPASS,
          query: this.inputText
        }
      }
      axios
        .get(this.apiURL + this.typeMovie, queryParams)
        .then((res) => {
          this.movies = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        }).finally(()=>{
          this.inputText = '';
        });
    },
  },
};
</script>

<style lang="scss">
@import "../style/general.scss";
</style>
