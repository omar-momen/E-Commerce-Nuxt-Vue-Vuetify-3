<template>
  <v-row class="product_slider">
    <v-col cols="12" md="2" v-if="!useHelpers().isSmallScreen()">
      <ul class="bullets">
        <li
          v-on="{
            mouseover: () => changeIndex(index),
            click: () => changeIndex(index),
          }"
          :class="{ active: current_slide_index == index }"
          v-for="(slide, index) in slides"
          :key="slide.id"
        >
          <nuxt-img
            :provider="slide.provider ? slide.provider : ''"
            :src="slide.url"
            preset="default"
            :alt="'product slide image - ' + slide.title"
            height="100"
            width="100"
          />
        </li>
      </ul>
    </v-col>

    <v-col class="px-0 px-md-5" cols="12" md="10">
      <Swiper @swiper="onSwiper" :modules="[Navigation]" :navigation="true">
        <SwiperSlide v-for="slide in slides" :key="slide.id">
          <div class="slide">
            <!-- <vue-image-zoomer
              :regular="slide.url"
              :alt="'product slide image - ' + slide.title"
              height="500"
              width="500"
            /> -->
            <nuxt-img
              :src="slide.url"
              :alt="'product slide image - ' + slide.title"
              height="500"
              width="500"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </v-col>
  </v-row>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// import { VueImageZoomer } from "vue-image-zoomer";
// import "vue-image-zoomer/dist/style.css";

const props = defineProps(["slides"]);

const my_swiper = ref(null);

const current_slide_index = ref(0);

const onSwiper = (swiper) => {
  my_swiper.value = swiper;
};
const changeIndex = (index) => {
  my_swiper.value.slideTo(index);
  current_slide_index.value = index;
};
</script>

<style lang="scss">
.product_slider {
  position: relative;
  z-index: 4;

  ul.bullets {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    li {
      height: 100px;
      width: 100px;
      margin-bottom: 10px;
      border-radius: 5px;
      overflow: hidden;
      cursor: pointer;

      &.active {
        border: 5px solid var(--app_color);
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    @media (max-width: 960px) {
      flex-direction: row;

      li {
        margin-block: 0;
        margin-inline-end: 10px;
      }
    }
  }

  .swiper {
    position: relative;
    z-index: 4;

    .swiper-wrapper {
      .swiper-slide {
        .slide {
          height: 80vh;
          overflow: hidden;
          border-radius: 10px;
          display: flex;
          justify-content: center;

          @media (max-width: 960px) {
            border-radius: 0;
            height: 60vh;
          }

          img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover;
          }
        }
      }

      .swiper-pagination {
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      @media (min-width: 960px) {
        display: none !important;
      }
      color: var(--app_color);
    }
  }
}
</style>
