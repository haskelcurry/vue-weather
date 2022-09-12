<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    back() {
      this.$router.push();
    }
  }
}
</script>

<template>
  <main class="main-container">
    <p class="nav">
      <a>Settings</a>
      <router-link to="/" class="header"> Back </router-link>
    </p>
    <input v-model="text" placeholder="Default Address">
    <p>{{ text }}</p>
    <form action=''>
      <h1>Units</h1><br>
      <input name='units' value='Metric' type='radio'>Metric
      <br />
      <input name='units' value='Standart' type='radio'>Standart
      <br />
      <input name='units' value='Imperial' type='radio'>Imperial
    </form><br>
    <div><br />
      <h2 id="Language">Language</h2><br>
      <select id='dropdown'>
        <br />
        <option>UA</option>
        <option>EN</option>
        <option>DE</option>
      </select>
    </div>
    <button @click="$router.back()">Save</button>
  </main>

</template>

<style scoped>
p.nav {
  border: 1px solid black;
  margin: 0 0 0px 0;
  padding: 10px 0 10px 10px;
}

h1 {
  font-size: 16px;
}

h2 {
  font-size: 16px;
}

button {
  background-color: grey;
  margin: 10px;
  font-size: 16px;
}

input {
  margin: 5px;
}
</style>