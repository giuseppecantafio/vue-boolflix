<template>
  <div>
    <header>
      <div class="container-fluid">
        <nav class="row">
          <div class="col-6 d-flex justify-content-start align-items-center">
            <h1>Boolflix!</h1>
          </div>
          <div class="col-6 d-flex justify-content-center align-items-center">
            <input
              type="text"
              placeholder="Cerca"
              v-model="inputText"
              @keyup.enter="myQuery"
            />
          </div>
        </nav>
      </div>
    </header>
          <app-cards :items="movies" title="Film" />
          <app-cards :items="series" title="Serie" />
  </div>
</template>

<script>
import axios from "axios";
import AppCards from "../components/AppCards.vue";

export default {
  components: { AppCards },
  name: "AppMain",
  data() {
    return {
      forExampleOnly:
        "https://api.themoviedb.org/3/search/movie/?api_key=1e8e3f34ceeb3f42ea36036bcfd6d28f&query=ciao&language=it-IT",
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
    myQuery() {
      const queryParams = {
        params: {
          api_key: this.apiPASS,
          query: this.inputText,
        },
      };
      this.researchMovies(queryParams);
      this.researchSeries(queryParams);
    },
    researchMovies(queryParams) {
      axios
        .get(this.apiURL + this.typeMovie, queryParams)
        .then((res) => {
          this.movies = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.inputText = "";
        });
    },
    researchSeries(queryParams) {
      axios
        .get(this.apiURL + this.typeSeries, queryParams)
        .then((res) => {
          this.series = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.inputText = "";
        });
    },
  },
};
</script>

<style lang="scss">
@import "../style/general.scss";

nav {
  background-color: $header-bg;
  height: 60px;
  h1 {
    color: $logo-cl;
  }
  input {
    padding-right: 10px;
  }
}
</style>
