<script setup>
const { getSearchQuery, setSearchQuery, clearSearchQuery } = useSearching();
const searchQuery = ref(getSearchQuery());

const reset = () => {
  clearSearchQuery();
  searchQuery.value = '';
};

watch(getSearchQuery, (value) => {
  if (!value) reset();
});
</script>

<template>
  <form class="relative items-center flex-1 -space-x-px rounded-md shadow-sm" @submit.prevent="setSearchQuery(searchQuery)">
    <input v-model="searchQuery" class="header-logo-user-box__search-box__input" placeholder="Keresés a termékek között" />
    <NuxtImg class="header-logo-user-box__search-box__img position-absolute" src="/img/header/search.svg" alt="Függöny Oázis" />
    <span
      v-if="searchQuery"
      class="absolute z-10 flex items-center gap-1 px-2 py-1 text-xs rounded cursor-pointer bg-primary bg-opacity-10 hover:bg-opacity-20 text-primary right-2"
      @click="reset">
      <span>{{ $t('messages.general.clear') }}</span>
      <Icon name="ion:close-outline" size="18" />
    </span>
  </form>
</template>
