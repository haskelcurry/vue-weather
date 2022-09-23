<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  props: {
    title: String
  }
};
</script>

<template>
  <header>
    <h2>The weather in: {{ title }}</h2>
  </header>
</template>

<style>
  h2 {
    color:red;
  }
</style>
