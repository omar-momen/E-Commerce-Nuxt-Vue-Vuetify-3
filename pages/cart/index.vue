<template>
  <div class="cart">
    <header class="mb-8">
      <h2 class="h_2 my-0">Shopping Cart</h2>
      <router-link class="para" to="/shop">Continue Shopping</router-link>
    </header>

    <v-row>
      <v-col cols="12" md="9"> <CartItems /> </v-col>
      <v-col cols="12" md="3"> <CartShipping /> </v-col>
    </v-row>
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
