<template>
  <v-row>
    <v-col cols="12" md="9">
      <CartItems />
    </v-col>

    <v-col cols="12" md="3">
      <CartShipping />
    </v-col>
  </v-row>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
const cart_store = useCartStore();
await cart_store.getCart();
</script>

<style lang="scss" scoped></style>
