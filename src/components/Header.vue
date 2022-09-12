<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  props: {
    title: String
  }
};
</script>

<template>
  <header class="main-header">
    <nav class="main-nav">
      <n-tabs type="line" style="--n-bar-color: #4f7bc7">
        <n-tab name="weather">
          <router-link to="/">Погода</router-link>
        </n-tab>
        <n-tab name="about">
          <router-link to="/about">Про нас</router-link>
        </n-tab>
        <n-tab name="subscribe">
          <router-link to="/subscribe">Підписатись</router-link>
        </n-tab>
        <n-tab name="setting">
          <router-link to="/settings">Налаштування</router-link>
        </n-tab>
      </n-tabs>
    </nav>
    <h2>{{ title }}</h2>
  </header>
</template>

<style scoped>
.main-nav {
  padding-left: 10px;
}
</style>