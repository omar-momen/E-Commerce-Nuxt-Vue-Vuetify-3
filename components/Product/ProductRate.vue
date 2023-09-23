<template>
  <div class="productRate">
    <div class="user">
      <nuxt-img :src="rate.user.img" preset="default" width="50" height="50" />
      <div class="text">
        <h3>{{ rate.user.name }}</h3>
        <v-rating
          :model-value="rate.rate"
          readonly
          color="white"
          active-color="yellow-accent-4"
          half-increments
          hover
          size="15"
        ></v-rating>
      </div>
    </div>

    <p class="para md">{{ rate.body }}</p>
    <hr />

    <div class="date">12-11-2023</div>
  </div>
</template>

<script setup>
const props = defineProps(["rate"]);
</script>

<style lang="scss" scoped>
.productRate {
  padding-inline-end: 5px;
  position: relative;
  .user {
    display: flex;
    margin-bottom: 7px;

    img {
      border-radius: 50%;
      margin-inline-end: 10px;
    }

    .text {
      h3 {
        margin-bottom: -10px;
      }
    }
  }

  hr {
    height: 1px;
    width: 85%;
    display: block;
    margin-top: 23px;
    margin-inline: auto;
    background: var(--border);
  }

  .date {
    position: absolute;
    top: 10px;
    right: 10px;
    color: var(--para);
    font-size: 14px;

    @media (max-width: 500px) {
      top: 1px;
      right: 1px;
    }
  }
}
</style>
