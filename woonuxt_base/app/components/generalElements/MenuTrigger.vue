<script setup lang="ts">
const { toggleMobileMenu } = useHelpers();
</script>

<template>
  <div>
    <Icon name="ion:menu-outline" size="30" class="hamburgerBtn cursor-pointer" @click="toggleMobileMenu" />
  </div>
</template>
