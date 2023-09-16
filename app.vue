<template>
  <AppLoader v-show="useGlobalStore().AppInitLoading" />
  <div>
    <NuxtLayout>
      <PageLoader v-show="useGlobalStore().pageLoading" />
      <NuxtPage :key="useHelpers().lang()" />
      <NuxtLoadingIndicator />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Outfit` : "Outfit";
  },
  meta: [
    {
      name: "description",
      content:
        "Get offers on popular products on Outfit. Browse and discover thousands of brands. Read customer reviews and find top sellers. discounted rates. Wide variety of products. Fast delivery. One-click payment. Track the shipment.",
    },
    {
      name: "author",
      content: "Omar Momen",
    },
    {
      name: "keywords",
      content: "SALE, BYE, CLOTHES, DISCOUNT",
    },
    {
      property: "og:title",
      content: "E-Commerce Omar",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content:
        "https://images.unsplash.com/photo-1542060748-10c28b62716f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      property: "og:url",
      content: "http://localhost:3000/",
    },
  ],
});

// Handling App
const nuxtApp = useNuxtApp();
nuxtApp.hook("app:suspense:resolve", async () => {
  useGlobalStore().AppInitLoading = false;
});
</script>
