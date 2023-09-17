<template>
  <div class="cartItems">
    <h3>item Summary ({{ cart_store.cart.items.length }})</h3>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
const cart_store = useCartStore();
</script>

<style lang="scss" scoped></style>
