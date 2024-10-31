<script setup lang="ts">
import { ref, computed } from 'vue';

const sliderElem = ref([
  {
    title: 'KIZÁRÓLAG PRÉMIUM ALAPANYOGOKBÓL DOLGOZUNK',
    description:
      'Minden termékünket kizárólag első osztályú szövetek felhasználásával készítjük, így garantálva otthona számára a stílus és minőség tökéletes harmóniáját. Válasszon boltunkat, ahol a kifinomultság és tartósság találkozik, hogy otthonát a lehető legjobban kiegészíthesse.',
    button: 'TOVÁBB',
    number: '1 / 3',
  },
  {
    title: 'KIZÁRÓLAG PRÉMIUM ALAPANYOGOKBÓL DOLGOZUNK',
    description:
      'Minden termékünket kizárólag első osztályú szövetek felhasználásával készítjük, így garantálva otthona számára a stílus és minőség tökéletes harmóniáját. Válasszon boltunkat, ahol a kifinomultság és tartósság találkozik, hogy otthonát a lehető legjobban kiegészíthesse.',
    button: 'TOVÁBB',
    number: '2 / 3',
  },
  {
    title: 'KIZÁRÓLAG PRÉMIUM ALAPANYOGOKBÓL DOLGOZUNK',
    description:
      'Minden termékünket kizárólag első osztályú szövetek felhasználásával készítjük, így garantálva otthona számára a stílus és minőség tökéletes harmóniáját. Válasszon boltunkat, ahol a kifinomultság és tartósság találkozik, hogy otthonát a lehető legjobban kiegészíthesse.',
    button: 'TOVÁBB',
    number: '3 / 3',
  },
]);

const highlightPremium = (text: string | null | undefined): string => {
  if (!text) {
    return '';
  }
  return text.replace('PRÉMIUM', '<strong class="f-600">PRÉMIUM</strong>');
};

const currentSlide = ref(0);

const nextSlide = () => {
  if (currentSlide.value < sliderElem.value.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = sliderElem.value.length - 1;
  }
};
</script>

<template>
  <section>
    <div class="slider-content position-relative">
      <NuxtImg class="slider-content__img" src="/img/slider/slider.webp" alt="Függöny Oázis" />
      <div class="slider-content__carousel-content position-absolute">
        <div class="carousel position-relative">
          <div class="carousel-slide d-flex" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div class="carousel-item" v-for="(item, index) in sliderElem" :key="index">
              <h1 class="carousel-item__h1 text-color f-300" v-html="highlightPremium(item.title)"></h1>
              <p class="carousel-item__p text-color f-300">
                {{ item.description }}
              </p>
              <NuxtLink class="carousel-item__NuxtLink f-300">{{ item.button }}</NuxtLink>
              <div class="test-v">
                <div class="carousel__btn-content d-flex">
                  <button class="carousel__btn-content__btn" @click="prevSlide">
                    <NuxtImg class="carousel__btn-content__btn__img" src="/img/slider/a-left.svg" alt="Függöny Oázis" />
                  </button>
                  <p class="carousel__btn-content__p text-color f-300">
                    {{ item.number }}
                  </p>
                  <button class="carousel__btn-content__btn" @click="nextSlide">
                    <NuxtImg class="carousel__btn-content__btn__img" src="/img/slider/a-right.svg" alt="Függöny Oázis" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
