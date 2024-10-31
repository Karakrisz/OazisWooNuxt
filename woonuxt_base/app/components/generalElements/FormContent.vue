<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  phonenumber: '',
  subject: '',
  message: '',
});

const sendEmail = () => console.log(form.value);
</script>

<template>
  <section>
    <div class="form-content">
      <div class="form-content__form-img-content position-relative grid-2">
        <div class="contact-form__content form-content__form-img-content__div bg-color-w">
          <div class="contact-form bg-color-w">
            <h5 class="contact-form__h5 f-300">KÉRDÉSE VAN?</h5>
            <h6 class="contact-form__h6 f-500">KERESSEN MINKET BIZALOMMAL</h6>
            <form @submit.prevent="sendEmail">
              <div class="form-group">
                <input class="form-group__input" placeholder="Név*" type="text" id="name" v-model="form.name" required />
              </div>
              <div class="form-group">
                <input class="form-group__input" placeholder="E-mail cím *" type="email" id="email" v-model="form.email" required />
              </div>
              <div class="form-group">
                <input class="form-group__input" placeholder="Telefonszám" type="text" id="phonenumber" v-model="form.phonenumber" required />
              </div>
              <div class="form-group">
                <input class="form-group__input" placeholder="Tárgy*" type="text" id="subject" v-model="form.subject" required />
              </div>
              <div class="form-group">
                <textarea rows="9" cols="300" class="form-group__textarea" placeholder="Üzenet..." id="message" v-model="form.message" required></textarea>
              </div>
              <div class="contact-form__btn-box">
                <button class="contact-form__btn-box__btn text-transform-uppercase text-color-w f-500" type="submit">
                  Küldés
                  <NuxtImg class="contact-form__btn-box__btn__img position-relative" src="/img/navigation/mail-arrow.svg" alt="Függöny Oázis" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="form-content__div form-content__img-content form-content__form-img-content__div">
          <NuxtImg class="form-content__img-content__img" src="/img/navigation/navigation.webp" alt="Függöny Oázis" />
        </div>
      </div>
    </div>
  </section>
</template>
