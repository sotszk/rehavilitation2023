<template>
  <div>
    <h2 class="text-3xl">Hello, VueApp!</h2>

    <h3 class="mt-4 text-2xl">お問い合わせフォーム</h3>

    <form :class="$style.form">
      <div :class="$style.form__field">
        <label :class="$style.form__label" for="name">お名前</label>
        <input :class="$style.form__input" type="text" v-model="nameValue" />
      </div>

      <div :class="$style.form__field">
        <label :class="$style.form__label" for="email">メールアドレス</label>
        <input :class="$style.form__input" type="email" v-model="emailValue" />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, watchEffect } from 'vue';

onBeforeMount(() => {
  console.log('VueApp mounted.');
});

const nameValue = ref('名前を入れてね');
const emailValue = ref('メアドを入れてね');

watchEffect(() => {
  console.log('お名前', nameValue.value);
  console.log('メアド', emailValue.value);
});
</script>

<style src="~/src/css/modules/vue-app.module.css" module></style>
