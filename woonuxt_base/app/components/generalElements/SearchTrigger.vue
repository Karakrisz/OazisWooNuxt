<script setup lang="ts">
const { toggleSearch } = useSearching();
</script>

<template>
  <div class="relative cursor-pointer inline-flex sm:hidden" title="Cart" @click="toggleSearch">
    <NuxtImg
          class="header-logo-user-box__search-box__img"
          src="/img/header/search.svg"
          alt="Függöny Oázis"
        />
  </div>
</template>
