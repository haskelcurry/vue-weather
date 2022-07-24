<script>
export default {
  props: {
    groupName: String
  }
}
</script>

<template>
  <footer class="page-footer">
    Зроблено з <span>❤</span> {{ groupName || 'першою' }} групою
    <a href="https://www.facebook.com/groups/1315639125595187" target="_blank">
      freeCodeCamp Novosilky
    </a>
  </footer>
</template>

<style scoped>
  footer {
    font-size: 12px;
    margin-top: 32px;
  }

  footer span {
    color: #ff1e42;
  }
</style>