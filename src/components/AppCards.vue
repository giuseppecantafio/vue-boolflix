<template>
  <div>
    <div class="col-12" v-if="film.length != 0">
      <h1>Risultato della ricerca:</h1>
      <ul v-for="(item, index) in film" :key="index">
        <li>
          <p>
            Titolo: <em>{{ item.title }}</em>
          </p>
          <p>Titolo originale: {{ item.original_title }}</p>
          <p>Lingua originale: {{ item.original_language }}</p>
          <p>Voto medio: {{ item.vote_average }}</p>
          <br />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCards",
  props: ['film']
};
</script>

<style lang="scss">
@import "../style/general.scss";
</style>
