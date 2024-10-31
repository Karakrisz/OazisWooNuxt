<script setup lang="ts">
import { ref, computed } from 'vue';

interface AccordionItem {
  title: string;
  content: string;
}

const AccordionItems: AccordionItem[] = [
  { title: 'Kell-e regisztrálnom a vásárláshoz?', content: 'Tartalom 1' },
  {
    title: 'Okostelefonon és tableten is tudok vásárolni?',
    content: 'Tartalom 2',
  },
  { title: 'Hogy adhatom le a rendelésem?', content: 'Tartalom 3' },
  {
    title: 'Lehetséges e-mailben, vagy telefonon is rendelni?',
    content: 'Tartalom 4',
  },
  {
    title: 'Lehetséges e-mailben, vagy telefonon is rendelni?',
    content: 'Tartalom 5',
  },
];

const currentIndex = ref<number | null>(null);
</script>

<template>
  <section>
    <div class="FAQ-content">
      <h3 class="FAQ-content__h3 text-transform-uppercase f-300 text-center">GYAKRAN ISMÉTELT KÉRDÉSEK</h3>
      <div class="accordion-content d-flex">
        <div
          v-for="(item, index) in AccordionItems"
          :key="index"
          class="accordion-content__accordion"
          @click="currentIndex = currentIndex === index ? null : index">
          <div class="accordion-content__header d-flex">
            <h3 class="accordion-content__header__h3 f-600">
              {{ item.title }}
            </h3>
            <span class="accordion-content__header__arrow" :class="{ 'accordion-is-open': currentIndex === index }">
              <NuxtImg class="accordion-content__header__arrow__img" src="/img/accordion/accordion-arrow.svg" alt="Függöny Oázis" />
            </span>
          </div>
          <div class="accordion-content__content" :class="{ AccordionOpen: currentIndex === index }">
            <p class="accordion-content__content__p text-color-w">
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
      <div class="FAQ-content__link-content text-center">
        <NuxtLink class="FAQ-content__link-content__NuxtLink text-transform-uppercase text-color-w f-600"> ÖSSZES KÉRDÉS MEGTEKINTÉSE </NuxtLink>
      </div>
    </div>
  </section>
</template>
