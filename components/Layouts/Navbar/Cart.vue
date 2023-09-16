<template>
  <div class="cart">
    <RouterLink to="/cart">
      <v-tooltip
        theme="light"
        text="Cart"
        location="bottom"
        aria-label="Cart Icon"
      >
        <template v-slot:activator="{ props }">
          <Icon v-bind="props" name="ph:shopping-cart-simple-light" />
        </template>
      </v-tooltip>
    </RouterLink>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
