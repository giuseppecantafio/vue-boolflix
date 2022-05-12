<template>
  <div>
    <div class="col-12">
      <h1 v-if="items.length != 0">{{ title }}</h1>
      <ul v-for="(item, index) in items" :key="index">
        <li>
          <p>
            Titolo: <em>{{ item.title || item.name }}</em>
          </p>
          <p>
            Titolo originale: {{ item.original_title || item.original_name }}
          </p>
          <p>
            Lingua originale:
            <img
              class="little-flag"
              v-if="
                item.original_language === 'it' ||
                item.original_language === 'en'
              "
              :src="
                require('../assets/img/' +
                  `${item.original_language}` +
                  '-flag.png')
              "
              :alt="item.original_language"
            />
            <span
              v-if="
                item.original_language !== 'it' &&
                item.original_language !== 'en'
              "
              >{{ item.original_language }}</span
            >
          </p>
          <p>Voto medio: {{ item.vote_average }}</p>
          <p>
            Locandina:
            <img :src="image_path + item.poster_path" alt="Locandina" />
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </p>
          <br />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCards",
  props: ["items", "series", "title"],
  data() {
    return {
      image_path: "https://image.tmdb.org/t/p/w92/",
    };
  },
};
</script>

<style lang="scss">
@import "../style/general.scss";
.little-flag {
  width: 20px;
  height: 20px;
}
</style>
