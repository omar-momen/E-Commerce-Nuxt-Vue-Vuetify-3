<template>
  <div class="homePage">
    <TheHeader />

    <section class="homeSection categories">
      <template v-if="categoriesIntersected">
        <Suspense>
          <LazyCategories />

          <template #fallback>
            <SkeltonCategories />
          </template>
        </Suspense>
      </template>
    </section>

    <section class="homeSection flashSale">
      <Suspense v-if="flashSaleIntersected">
        <LazyFlashSale />

        <template #fallback> <SkeltonProduct /> </template>
      </Suspense>
    </section>

    <section class="homeSection bigOffers">
      <LazyBigOffers v-if="bigOffersIntersected" />
    </section>

    <section class="homeSection topRated">
      <Suspense>
        <LazyTopRated v-if="topRatedIntersected" />
        <template #fallback> <SkeltonProduct /> </template>
      </Suspense>
    </section>

    <section class="homeSection collections">
      <LazyCollections v-if="collectionsIntersected" />
    </section>

    <section class="homeSection instagram">
      <LazyInstagram v-if="instagramIntersected" />
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "HomePage",
});

const categoriesIntersected = ref(false);
const flashSaleIntersected = ref(false);
const bigOffersIntersected = ref(false);
const topRatedIntersected = ref(false);
const collectionsIntersected = ref(false);
const instagramIntersected = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      let theVar = eval(`${entries[0].target.classList[1]}Intersected`);
      theVar.value = true;
      observer.unobserve(entries[0].target);
    }
  });
  const All_Sections = document.querySelectorAll(".homeSection");
  All_Sections.forEach((section) => {
    observer.observe(section);
  });
});
</script>

<style scoped lang="scss">
.homeSection {
  margin-bottom: 100px;
  min-height: 200px;
}
</style>
