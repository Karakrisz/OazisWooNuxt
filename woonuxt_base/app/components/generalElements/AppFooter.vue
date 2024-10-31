<script setup lang="ts"></script>

<template>
  <!-- <LangSwitcher class="mt-8" /> -->
  <footer>
    <div class="footer-content grid-4">
      <div class="footer-content__link-box">
        <h6 class="footer-content__link-box__h6 text-color">MENÜ</h6>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">TERMÉKEK</NuxtLink>
        </p>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">BELÉPÉS</NuxtLink>
        </p>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">REGISZTRÁCIÓ</NuxtLink>
        </p>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">PROFILOM</NuxtLink>
        </p>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">KOSÁR</NuxtLink>
        </p>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">PROFILOM</NuxtLink>
        </p>
      </div>
      <div class="footer-content__link-box footer-content__link-box--one-formating">
        <h6 class="footer-content__link-box__h6 text-color">INFORMÁCIÓK</h6>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK</NuxtLink>
        </p>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">ADATKEZELÉSI TÁJÉKOZTATÓ</NuxtLink>
        </p>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">FIZETÉS</NuxtLink>
        </p>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">SZÁLLÍTÁS</NuxtLink>
        </p>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">GYAKRAN ISMÉTELT KÉRDÉSEK</NuxtLink>
        </p>
        <p class="footer-content__link-box__p">
          <NuxtLink class="footer-content__link-box__NuxtLink text-color">ELÉRHETŐSÉGEK</NuxtLink>
        </p>
      </div>
      <div class="footer-content__link-box footer-content__link-box--two-formating">
        <h6 class="footer-content__link-box__h6 footer-content__link-box__h6--margin text-color">ELÉRHETŐSÉG</h6>
        <p class="footer-content__link-box__p">
          <a href="tel:+36704266794" class="footer-content__link-box__link text-color">
            <NuxtImg class="footer-content__link-box__link__img" src="/img/footer/mobile.svg" alt="Függöny Oázis" />
            +36 70 426 67 94</a
          >
        </p>
        <p class="footer-content__link-box__p text-color">
          <NuxtImg class="footer-content__link-box__link__img" src="/img/footer/time.svg" alt="Függöny Oázis" />
          Telefonos ügyfélszolgálat: Munkanapokon 8:00 - 17:00
        </p>
        <p class="footer-content__link-box__p">
          <a href="mailto:fuggonyoazis@gmail.com" class="footer-content__link-box__link text-color">
            <NuxtImg class="footer-content__link-box__link__img" src="/img/footer/mail.svg" alt="Függöny Oázis" />
            fuggonyoazis@gmail.com</a
          >
        </p>
      </div>
      <div class="footer-content__img-content d-flex">
        <NuxtImg class="footer-content__img-content__img" src="img/header/logo.svg" alt="Függöny Oázis" />
      </div>
    </div>

    <div class="copyright-content">
      <NuxtImg class="copyright-content__img" src="img/footer/digitalSeed.svg" alt="Függöny Oázis" />
    </div>
  </footer>
</template>
