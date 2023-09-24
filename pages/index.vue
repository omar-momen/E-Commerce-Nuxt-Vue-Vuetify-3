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
      <template v-if="flashSaleIntersected">
        <Suspense>
          <LazyFlashSale />

          <template #fallback> <SkeltonProduct /> </template>
        </Suspense>
      </template>
    </section>

    <section class="homeSection bigOffers">
      <template v-if="bigOffersIntersected">
        <LazyBigOffers />
      </template>
    </section>

    <section class="homeSection topRated">
      <template v-if="topRatedIntersected">
        <Suspense>
          <LazyTopRated />
          <template #fallback> <SkeltonProduct /> </template>
        </Suspense>
      </template>
    </section>

    <section class="homeSection collections">
      <template v-if="collectionsIntersected">
        <LazyCollections />
      </template>
    </section>

    <section class="homeSection instagram">
      <template v-if="instagramIntersected">
        <LazyInstagram />
      </template>
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
  setTimeout(() => {
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
  }, 1000);
});
</script>

<style scoped lang="scss">
.homeSection {
  margin-bottom: 100px;
  min-height: 200px;
}
</style>
