<script>
export default {};
</script>

<template>
  <n-tabs type="line">
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
  <router-view></router-view>
</template>

<style scoped>
</style>
