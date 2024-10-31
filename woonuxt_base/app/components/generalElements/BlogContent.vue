<script setup lang="ts">
import { ref, computed } from 'vue';

import he from 'he';

interface Post {
  id: number;
  title: string;
  body: string;
  image: string;
}

const itemsPost = ref<Post[] | null>(null);
const error = ref<string | null>(null);
const loading = ref(false);

async function fetchPosts() {
  loading.value = true;
  try {
    const response = await fetch('https://fuggonyoazis.hu/api/public/json-posts');
    if (!response.ok) throw new Error('Failed to fetch posts');
    const data = await response.json();
    itemsPost.value = data;
  } catch (e) {
    error.value = (e as Error).message;
    console.error('Error fetching posts:', (e as Error).message);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchPosts();
});

function getShortBody(body: string) {
  const decodedBody = he.decode(body);
  if (decodedBody.length > 100) {
    return decodedBody.substring(0, 100) + '...';
  }
  return decodedBody;
}
</script>

<template>
  <section>
    <div class="blog-content">
      <h4 class="blog-content__h4 text-transform-uppercase f-300 text-center">BLOG</h4>

      <div class="blog-content__img-text-box grid-3">
        <div v-for="post in itemsPost" :key="post.id" class="blog-content__img-text-box__div">
          <NuxtImg class="blog-content__img-text-box__div__img" :src="`https://fuggonyoazis.hu/api/public/storage/${post.image}`" alt="{{ post.title }}" />
          <div class="blog-content__img-text-box__div__tBox">
            <h3 class="blog-content__img-text-box__div__h3 f-600">
              {{ post.title }}
            </h3>

            <p class="blog-content__img-text-box__div__p" v-html="getShortBody(post.body)" />

            <div class="blog-content__img-text-box__div__link-box d-flex">
              <NuxtLink :to="`/posts/${post.id}`" class="blog-content__img-text-box__div__link-box__NuxtLink f-500"> Tovább olvasok </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
