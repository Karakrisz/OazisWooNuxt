<script setup>
const links = [
  { name: 'FÜGGÖNY', path: '/' },
  { name: 'LAKÁSTEXTIL', path: '/lakastextil' },
  { name: 'SÖTÉTÍTŐ', path: '/sotetito' },
  { name: 'RÖVIDÁRÚ', path: '/rovidaru' },
  { name: 'KARNIS', path: '/dekoracio' },
  { name: 'AKCIÓK', path: '/akciok' },
  { name: 'KAPCSOLAT', path: '/kapcsolat' },
];


</script>

<template>
  <nav>
    <ul class="menu__list d-flex">
      <NuxtLink class="menu__item text-color text-transform-uppercase f-500" v-for="link in links" :key="link.path" :to="link.path">
        {{ link.name }}
      </NuxtLink>
      <!-- <NuxtLink to="/products">{{ $t('messages.general.allProducts') }}</NuxtLink>
    <NuxtLink to="/categories">{{ $t('messages.shop.category', 2) }}</NuxtLink>
    <NuxtLink class="lg:hidden" to="/wishlist" :prefetch="false">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink> -->
    </ul>

  </nav>
</template>
