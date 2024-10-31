<script lang="ts" setup>
import { StockStatusEnum, ProductTypesEnum, type AddToCartInput } from '#woo';
interface ProductRawRegularPrice {
  rawRegularPrice: number;
}
const route = useRoute();
const { storeSettings } = useAppConfig();
const { arraysEqual, formatArray, checkForVariationTypeOfAny } = useHelpers();
const { addToCart, isUpdatingCart } = useCart();
const slug = route.params.slug as string;

const { data } = (await useAsyncGql('getProduct', { slug })) as { data: { value: { product: ProductRawRegularPrice & Product } } };
const product = ref<ProductRawRegularPrice & Product>(data?.value?.product);
const width = product.value.metaData?.filter((p) => p?.key == 'szelesseg')[0]?.value;
const height = product.value.metaData?.filter((p) => p?.key == 'magassag')[0]?.value;
const fuggony = product.value.metaData?.filter((p) => p?.key == 'fuggony')[0]?.value;
const varras = ref<number>(0 || parseInt(product.value.metaData?.filter((p) => p?.key == 'varras')[0]?.value));
const quantity = ref<number>(1);
const extra_product_field = defineModel({ default: 1 });

const activeVariation = ref<Variation | null>(null);
const variation = ref<Attribute[]>([]);
const indexOfTypeAny = ref<number[]>([]);
const attrValues = ref();
const isSimpleProduct = computed<boolean>(() => product.value?.type === ProductTypesEnum.SIMPLE);
const isVariableProduct = computed<boolean>(() => product.value?.type === ProductTypesEnum.VARIABLE);

const type = computed(() => activeVariation.value || product.value);

// Új változók a szélesség és magasság tárolására
const widthInput = ref<number>(parseInt(width) || 0);
const heightInput = ref<number>(parseInt(height) || 0);

//*
if( fuggony == 1 && extra_product_field == 1 ) {
  if(type?.value.rawSalePrice > 0) type.value.salePrice = parseInt( type?.value.rawSalePrice) + parseInt( product.value.metaData?.filter((p) => p?.key == 'varras')[0]?.value )+ "";
  type.value.regularPrice = parseInt( type?.value.rawRegularPrice) + parseInt( product.value.metaData?.filter((p) => p?.key == 'varras')[0]?.value )+ "";
}
//*/

const selectProductInput = computed(() => ({
  productId: type.value?.databaseId,
  quantity: quantity.value,
  variationId: activeVariation.value?.databaseId ?? null,
  variation: activeVariation.value ? attrValues.value : null,
  extraData: JSON.stringify({
    width: widthInput.value,  // Szélesség
    height: heightInput.value  // Magasság
  })
}));


const mergeLiveStockStatus = (payload: Product): void => {
  product.value.stockStatus = payload.stockStatus ?? product.value?.stockStatus;
  payload.variations?.nodes?.forEach((variation: Variation, index: number) => {
    if (product.value?.variations?.nodes[index]) {
      product.value.variations.nodes[index].stockStatus = variation.stockStatus;
    }
  });
};

onMounted(async () => {
  try {
    const { product } = await GqlGetStockStatus({ slug });
    if (product) mergeLiveStockStatus(product as Product);
  } catch (error: any) {
    const errorMessage = error?.gqlErrors?.[0].message;
    if (errorMessage) console.error(errorMessage);
  }
  if (product.value.variations) indexOfTypeAny.value.push(...checkForVariationTypeOfAny(product.value));
});

const updateSelectedVariations = (variations: Attribute[]): void => {
  if (!product.value.variations) return;
  attrValues.value = variations.map((el) => ({ attributeName: el.name, attributeValue: el.value }));
  const cloneArray = JSON.parse(JSON.stringify(variations));
  const getActiveVariation = product.value.variations?.nodes.filter((variation: any) => {
    // If there is any variation of type ANY set the value to ''
    if (variation.attributes) {
      indexOfTypeAny.value.forEach((index) => (cloneArray[index].value = ''));
      return arraysEqual(formatArray(variation.attributes.nodes), formatArray(cloneArray));
    }
  });
  activeVariation.value = getActiveVariation[0];
  selectProductInput.value.variationId = activeVariation.value?.databaseId ?? null;
  selectProductInput.value.variation = activeVariation.value ? attrValues.value : null;
  variation.value = variations;
};

const stockStatus = computed(() => {
  if (isVariableProduct.value) return activeVariation.value?.stockStatus || StockStatusEnum.OUT_OF_STOCK;
  return type.value?.stockStatus || StockStatusEnum.OUT_OF_STOCK;
});
const disabledAddToCart = computed(() => {
  if (isSimpleProduct.value) return !type.value || stockStatus.value === StockStatusEnum.OUT_OF_STOCK || isUpdatingCart.value;
  return !type.value || stockStatus.value === StockStatusEnum.OUT_OF_STOCK || !activeVariation.value || isUpdatingCart.value;
});

// Változtatjuk a függöny magasságát
function changeHeight(event) {
  // Ha nagyobbat állít mint adott, visszaállítjuk
  if(Number(event.target.value) > height) {
    event.target.value = height
  }

  const value = Number(event.target.value);
  heightInput.value = value; // Frissítjük a heightInput értékét
}

// Változtatjuk a függöny szélességét
function changeWidth(event) {
  // Ha kisebbet állít mint adott, visszaállítjuk
  if(Number(event.target.value) < width) {
    event.target.value = width
  }
  //quantity.value = event.target.value / 100;

  const value = Number(event.target.value);
  widthInput.value = value; // Frissítjük a widthInput értékét
}

function changeType(event) {
  extra_product_field.value = event.target.value;
}

async function handleAddToCart() {
  console.log(selectProductInput.value);  
  const input = { ...selectProductInput.value };
  await addToCart(input);
}

const total = computed(() => {
  if(varras.value && extra_product_field.value === 1) {
    return ( Number(type.value.rawSalePrice || type.value.rawRegularPrice) * Number(quantity.value) * Number(widthInput.value/100) + Number(varras.value) * Number(widthInput.value)/100 * Number(quantity.value) )
  }
  // TODO: fix
  return ( Number(type.value.rawSalePrice || type.value.rawRegularPrice ) * Number(quantity.value) )
})

</script>
<template>
  <main class="container relative py-6 xl:max-w-7xl" v-if="product">
    <SEOHead :info="product" />
    <Breadcrumb :product class="mb-6" v-if="storeSettings.showBreadcrumbOnSingleProduct" />
    <div class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
      <ProductImageGallery
        v-if="product.image"
        class="relative flex-1"
        :main-image="product.image"
        :gallery="product.galleryImages!"
        :node="type"
        :activeVariation="activeVariation || {}" />
      <NuxtImg v-else class="relative flex-1 skeleton" src="/images/placeholder.jpg" :alt="product?.name || 'Product'" />
      <div class="lg:max-w-md xl:max-w-lg md:py-2 w-full">
        <div class="flex justify-between mb-4">
          <div class="flex-1">
            <h1 class="flex flex-wrap items-center gap-2 mb-2 text-2xl font-sesmibold">
              {{ type.name }}<span v-if="fuggony"> szélesség: {{ widthInput }}cm,</span><span v-if="fuggony"> magasság: {{ heightInput }}cm</span>
              <WPAdminLink :link="`/wp-admin/post.php?post=${product.databaseId}&action=edit`">Edit</WPAdminLink>
            </h1>
            <StarRating :rating="product.averageRating || 0" :count="product.reviewCount || 0" v-if="storeSettings.showReviews" />
          </div>
          <ProductPrice class="text-xl" :sale-price="type.salePrice" :regular-price="`${type.regularPrice} / 100cm`" /> 

          <h3 style="background-color: limegreen;height: fit-content;padding: .5em;">
            Fizetendő: {{ Intl.NumberFormat('hu-HU',{
                  style: 'currency',
                  currency: 'HUF',
                  maximumFractionDigits: 0,
                  useGrouping: true,
                }).format( total ) }}
          </h3>

        </div>
        <div v-if="fuggony" class="grid gap-2 my-8 text-sm">
          <div v-if="fuggony" class="flex items-center gap-2">
            <input type="radio" id="ftype1" name="ftype" v-model="extra_product_field" :value="1" @input="changeType"><label for="ftype1"> Készre varrás</label>
            <input type="radio" id="ftype2" name="ftype" v-model="extra_product_field" :value="0" @input="changeType"><label for="ftype2"> Méteráru</label>
          </div>
          <div v-if="fuggony" class="flex items-center gap-2">
            <h3 v-if="extra_product_field === 1">Varrás: {{ varras/100 }} Ft/cm</h3>
          </div>
          <div v-if="fuggony" class="flex items-center gap-2">
            <h3>Szélesség (cm): <input type="number" name="fwidth" @blur="changeWidth" v-model="widthInput"></h3>
            <h3>Magasság (cm): <input type="number" name="fheight" @input="changeHeight" v-model="heightInput"></h3>
          </div>
        </div>
        <div class="grid gap-2 my-8 text-sm">
          <div class="flex items-center gap-2">
            <span class="text-gray-400">{{ $t('messages.shop.availability') }}: </span>
            <StockStatus :stockStatus @updated="mergeLiveStockStatus" />
          </div>
          <div class="flex items-center gap-2" v-if="storeSettings.showSKU">
            <span class="text-gray-400">{{ $t('messages.shop.sku') }}: </span>
            <span>{{ product.sku || 'N/A' }}</span>
          </div>
        </div>
        <div class="mb-8 font-light prose" v-html="product.shortDescription || product.description" />
        <hr />
        <form @submit.prevent="handleAddToCart()">
          <input type="hidden" id="extra_product_field" v-model="extra_product_field">
          <AttributeSelections
            v-if="product.type == 'VARIABLE' && product.attributes && product.variations"
            class="mt-4 mb-8"
            :attributes="product.attributes.nodes"
            :defaultAttributes="product.defaultAttributes"
            :variations="product.variations.nodes"
            @attrs-changed="updateSelectedVariations" />
          <div class="fixed bottom-0 left-0 z-10 flex items-center w-full gap-4 p-4 mt-12 bg-white md:static md:bg-transparent bg-opacity-90 md:p-0">
            <input
              v-model="quantity"
              type="number"
              min="1"
              aria-label="Quantity"
              class="bg-white border rounded-lg flex text-left p-2.5 w-20 gap-4 items-center justify-center focus:outline-none" />
            <AddToCartButton class="flex-1 w-full md:max-w-xs" :disabled="disabledAddToCart" :class="{ loading: isUpdatingCart }" />
          </div>
        </form>
        <div v-if="storeSettings.showProductCategoriesOnSingleProduct">
          <div class="grid gap-2 my-8 text-sm">
            <div class="flex items-center gap-2">
              <span class="text-gray-400">{{ $t('messages.shop.category', 2) }}:</span>
              <div class="product-categories" v-if="product.productCategories">
                <NuxtLink
                  v-for="category in product.productCategories.nodes"
                  :key="category.slug"
                  :to="`/product-category/${decodeURIComponent(category.slug)}`"
                  class="hover:text-primary"
                  :title="category.name"
                  >{{ category.name }}<span class="comma">, </span>
                </NuxtLink>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div class="flex flex-wrap gap-4">
          <WishlistButton :product />
          <ShareButton :product />
        </div>
      </div>
    </div>
    <div v-if="product.description || product.reviews" class="my-32">
      <ProductTabs :product />
    </div>
    <div class="my-32" v-if="product.related && storeSettings.showRelatedProducts">
      <div class="mb-4 text-xl font-semibold">{{ $t('messages.shop.youMayLike') }}</div>
      <ProductRow :products="product.related.nodes" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5" />
    </div>
  </main>
</template>
<style scoped>
.product-categories > a:last-child .comma {
  display: none;
}
input[type='number']::-webkit-inner-spin-button {
  opacity: 1;
}
</style>