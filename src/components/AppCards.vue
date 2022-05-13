<template>
  <div>
    <div class="container">
      <div class="row">
        <h1 v-if="items.length != 0">{{ title }}</h1>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 my-2 mx-2 cards"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="resultCards">
            <div class="img-container">
              <img
                :src="image_path + item.poster_path"
                onerror="this.src='https://dummyimage.com/304x456/000000/ff0000.png&text=Boolflix+:)'"
                class="img-fluid"
                alt="Locandina"
              />
            </div>
            <div class="details">
              <div class="detailsCard text-left">
                <span
                  >Titolo: <em>{{ item.title || item.name }}</em></span
                ><br />
                <span
                  >Titolo originale:
                  {{ item.original_title || item.original_name }}</span
                ><br />
                <span>
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
                  /> </span
                ><br />
                <span
                  v-if="
                    item.original_language !== 'it' &&
                    item.original_language !== 'en'
                  "
                  >{{ item.original_language }}</span
                ><br />
                <span>
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
                </span>
              </div>
            </div>
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
      isActive: true,
    };
  },
};
</script>

<style lang="scss">
@import "../style/general.scss";
.cards {
  width: auto;
  height: auto;
  text-align: center;
  .resultCards {
    position: relative;
    .img-container {
      width: 194px;
      min-width: 194px;
      height: 294px;
      img {
        width: 100%;
        height: 100%;
      }
      &:hover img {
        display: none;
      }
      &:hover + .details {
        display: block;
      }
    }
    .details {
      display: none;
      background-color: $header-bg;
      color: $primary;
      width: 194px;
      height: 294px;
      position: absolute;
      top: 0;
      left: 0;
      .little-flag {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
