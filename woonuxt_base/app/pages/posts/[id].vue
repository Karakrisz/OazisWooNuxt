<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)
const error = ref(null)
const loading = ref(false)

async function fetchPost() {
  loading.value = true
  try {
    const response = await fetch(
      `https://fuggonyoazis.hu/api/public/json-posts/${route.params.id}`
    )
    if (!response.ok) throw new Error('Failed to fetch post')
    const data = await response.json()
    post.value = data
  } catch (e) {
    error.value = e.message
    console.error('Error fetching post:', e.message)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPost()
})
</script>

<template>
  <div class="supage-content position-relative">
    <div v-if="loading"><h2 class="supage-content__h2 f-300">Loading...</h2></div>
    <div v-else-if="error">
      <h2 class="supage-content__h2 f-300">{{ error }}</h2>
    </div>
    <div v-else-if="post">
      <h2 class="supage-content__h2 f-300">{{ post.title }}</h2>
      <img
        class="supage-content__img"
        :src="`https://fuggonyoazis.hu/api/public/storage/${post.image}`"
        :alt="post.title"
      />
      <p class="supage-content__p" v-html="post.body"></p>
    </div>
    <div v-else><h2 class="supage-content__h2 f-300">No post available.</h2></div>
    <div class="supage-content__link-box">
      <NuxtLink class="supage-content__link-box__NuxtLink text-color-w f-600" to="/"
        >Kezdőlap</NuxtLink
      >
    </div>
  </div>
</template>
