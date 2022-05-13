<template>
  <div>
    <div class="container">
      <div class="row">
        <h1 v-if="items.length != 0">{{ title }}</h1>
        <div class="col-12 col-sm-6 col-md-4 col-lg-2 py-2 cards debug" v-for="(item, index) in items" :key="index">
              <img
                :src="image_path + item.poster_path"
                onerror="this.src='https://dummyimage.com/304x456/000000/ff0000.png&text=Boolflix+:)'"
                class="img-fluid"
                alt="Locandina"
              />
              <div class="details d-none">
                Titolo: <em>{{ item.title || item.name }}</em>
                Titolo originale: {{ item.original_title || item.original_name }}
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
                Rating:
                <i
                  v-for="(num, index) in n"
                  :key="index"
                  :class="
                    num <= item.vote_average / 2
                      ? 'fa-solid fa-star'
                      : 'fa-regular fa-star'
                  "
                ></i>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCards",
  props: ["items", "series", "title"],
  data() {
    return {
      image_path: "https://image.tmdb.org/t/p/w342/",
      n: 5,
    };
  },
};
</script>

<style lang="scss">
@import "../style/general.scss";
.cards{
  width: auto;
  height: auto;
  img{

  }
  .details{

      .little-flag {
    width: 20px;
    height: 20px;
    }
  }
}
</style>
