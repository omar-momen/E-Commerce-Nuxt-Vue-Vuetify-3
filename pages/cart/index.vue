<template>
  <div class="cart">
    <header class="mb-8">
      <h2 class="h_2 my-0">Shopping Cart</h2>
      <router-link class="para" to="/shop">Continue Shopping</router-link>
    </header>

    <Suspense>
      <CartHeader />
      <template #fallback> cart loading... </template>
    </Suspense>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.cart {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > a {
      text-decoration: underline;
    }
  }
}
</style>
