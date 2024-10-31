<script setup>
const { toggleCart, cart } = useCart();
</script>

<template>
  <div class="cartTrigger relative cursor-pointer d-flex" title="Cart" @click="toggleCart">

    <div class="cartTrigger__tBox">
      <ClientOnly>
        <Transition name="popIn" mode="out-in">
          <span
            v-if="cart?.contents?.itemCount > 0"
            class="cartTrigger__tBox__span f-600"
            >{{ cart?.contents?.itemCount }}</span
          >
        </Transition>
      </ClientOnly>
    </div>

    <div class="cartTrigger__iBox">
      <NuxtImg
        class="header-logo-user-box__login-box__link__img header-logo-user-box__login-box__link__img--format position-relative"
        src="/img/header/basket.svg"
        alt="Függöny Oázis" />
    </div>


  </div>
</template>

<style lang="postcss">
/* popIn */
.popIn-enter-active,
.popIn-leave-active {
  transition: all 200ms cubic-bezier(0, 0, 0.57, 1.61);
}

.popIn-enter-from,
.popIn-leave-to {
  transform: scale(0);
}
</style>
