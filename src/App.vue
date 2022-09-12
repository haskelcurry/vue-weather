<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default { components: { Header, Footer } };
</script>

<template>
    <Header title="Погода в: " />
    <router-view></router-view>
    <Footer groupName="першою" />

</template>

<style scoped>

</style>