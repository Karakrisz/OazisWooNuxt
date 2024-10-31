<script setup lang="ts">
const { isShowingSearch } = useSearching();
</script>

<template>
  <header class="header">
    <div class="header__up-box">
      <a class="header__up-box__link header__up-box__link--margin f-400" href="tel:+36704266794">
        <NuxtImg class="header__up-box__link__img" src="/img/header/mobile.svg" alt="Függöny Oázis" />
        +36 70 426 67 94
      </a>
      <a class="header__up-box__link f-400" href="mailto:fuggonyoazis@gmail.com">
        <NuxtImg class="header__up-box__link__img" src="/img/header/mail.svg" alt="Függöny Oázis" />
        fuggonyoazis@gmail.com
      </a>
    </div>
    <div class="header-logo-user-box grid-3">
      <div class="header-logo-user-box__img-box">
        <NuxtImg class="header-logo-user-box__img-box__img" src="/img/header/logo.svg" alt="Függöny Oázis" />
      </div>
      <div class="header-logo-user-box__search-box header-logo-user-box__search-box--d-none position-relative">
        <ProductSearch />
      </div>
      <div class="header-logo-user-box__login-box d-flex">
        <div class="header-logo-user-box__login-box__link">
          Bejelentkezés
          <SignInLink />
        </div>
        <div class="header-logo-user-box__login-box__link header-logo-user-box__login-box__link--margin">
          <CartTrigger />
        </div>
      </div>
    </div>

    <div class="header-content">
      <div class="nav-box header-content__nav-box">
        <MainMenu />
      </div>
    </div>

    <div class="header__mobilBox flex items-center justify-between py-4">
      <div class="flex items-center">
        <MenuTrigger class="lg:hidden" />
      </div>
      <div class="flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-4 md:gap-6">
        <SearchTrigger />
      </div>
    </div>
    <Transition name="scale-y" mode="out-in">
      <div class="container mb-3 -mt-1 sm:hidden" v-if="isShowingSearch">
        <ProductSearch class="flex w-full" />
      </div>
    </Transition>
  </header>
</template>
