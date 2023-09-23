<template>
  <div class="alsoProducts">
    <h2 class="h_2 mb-2">Customers Also viewed</h2>
    <v-row>
      <v-col cols="6" md="3" v-for="product in products" :key="product.id">
        <ProductItem :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/product";
const products = await useProductStore().getProducts();
</script>

<style lang="scss" scoped></style>
