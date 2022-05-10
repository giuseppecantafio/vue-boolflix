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
      <div class="col-12" v-if="result.length != 0">
        <h1>Risultato della ricerca:</h1>
        <ul v-for="(item, index) in result" :key="index">
          <li>
            <p>Titolo: <em>{{ item.title }}</em></p>
            <p>Titolo originale: {{ item.original_title }}</p>
            <p>Lingua originale: {{ item.original_language }}</p>
            <p>Voto medio: {{ item.vote_average }}</p>
            <br />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AppMain",
  data() {
    return {
      forExampleOnly:
        "https://api.themoviedb.org/3/search/movie/?api_key=1e8e3f34ceeb3f42ea36036bcfd6d28f&query=ciao&language=it-IT",
      apiURL: "https://api.themoviedb.org/3/search",
      type: "movie",
      apiPASS: "?api_key=1e8e3f34ceeb3f42ea36036bcfd6d28f",
      inputText: "",
      languageIT: "language=it-IT",
      result: [],
    };
  },
  methods: {
    research() {
      axios
        .get(
          this.apiURL +
            "/" +
            this.type +
            "/" +
            this.apiPASS +
            "&query=" +
            this.inputText +
            "&" +
            this.languageIT
        )
        .then((res) => {
          this.result = res.data.results;
          console.log(this.result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
@import "../style/general.scss";
</style>
