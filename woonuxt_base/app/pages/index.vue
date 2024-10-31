<script lang="ts" setup>
// import { ProductsOrderByEnum } from '#woo';
// const { siteName, description, shortDescription, siteImage } = useAppConfig();

// const { data } = await useAsyncGql('getProductCategories', { first: 6 });
// const productCategories = data.value?.productCategories?.nodes || [];

// const { data: productData } = await useAsyncGql('getProducts', { first: 4, orderby: ProductsOrderByEnum.POPULARITY });
// const popularProducts = productData.value.products?.nodes || [];

// useSeoMeta({
//   title: `Kezdőlap`,
//   ogTitle: siteName,
//   description: description,
//   ogDescription: shortDescription,
//   ogImage: siteImage,
//   twitterCard: `summary_large_image`,
// });
import { ref, onMounted } from 'vue';
import { ProductsOrderByEnum } from '#woo';
const { siteName, description, shortDescription, siteImage } = useAppConfig();

const productCategories = ref<
  Array<{
    count?: number | null;
    databaseId: number;
    id: string;
    name?: string | null;
    slug?: string | null;
    image?: {
      sourceUrl?: string | null;
      altText?: string | null;
      title?: string | null;
    } | null;
  }>
>([]);

type ProductTypesEnum = any;

const popularProducts = ref<
  Array<{
    name?: string | null;
    slug?: string | null;
    type?: ProductTypesEnum | null;
    databaseId: number;
    id: string;
    averageRating?: number | null;
    reviewCount?: number | null;
    terms?: { nodes: Array<any> } | null;
    productCategories?: { nodes: Array<any> } | null;
  }>
>([]);

onMounted(async () => {
  await new Promise(resolve => setTimeout(resolve, 100));
  await loadData();
});

async function loadData() {
  const { data } = await useAsyncGql('getProductCategories', { first: 6 });
  productCategories.value = data.value?.productCategories?.nodes || [];

  const { data: productData } = await useAsyncGql('getProducts', { first: 4, orderby: ProductsOrderByEnum.POPULARITY });
  popularProducts.value = productData.value.products?.nodes || [];
}

// SEO beállítások
useSeoMeta({
  title: `Kezdőlap`,
  ogTitle: siteName,
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
  twitterCard: `summary_large_image`,
});
</script>

<template>
  <main>
    <HeroBanner />
    <CategoryNavi />
    <FormContent />
    <FaqContent />
    <BlogContent />


    <section class="container my-16">
      <div class="flex items-end justify-between">
        <!-- <h2 class="text-lg font-semibold md:text-2xl">{{ $t('messages.shop.shopByCategory') }}</h2> -->
        <NuxtLink class="text-primary" to="/categories">{{ $t('messages.general.viewAll') }}</NuxtLink>
      </div>
      <div class="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
        <CategoryCard v-for="(category, i) in productCategories" :key="i" class="w-full" :node="category" />
      </div>
    </section>


    <section class="container my-16" v-if="popularProducts">
      <div class="flex items-end justify-between">
        <h2 class="text-lg font-semibold md:text-2xl">Popular Products</h2>
        <NuxtLink class="text-primary" to="/products">{{ $t('messages.general.viewAll') }}</NuxtLink>
      </div>
      <ProductRow :products="popularProducts" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-8" />
    </section>
  </main>
</template>

<style scoped>
.brand img {
  max-height: min(8vw, 120px);
  object-fit: contain;
  object-position: center;
}
</style>
