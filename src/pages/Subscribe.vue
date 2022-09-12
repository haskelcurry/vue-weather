<template>
  <main class="main-container">
    <p class="nav">
      <a> Subscribe</a>
      <router-link to="/" class="header"> Back </router-link>
    </p>

    <p class="form"><br>

      <input v-model="Name" placeholder="Name" /><br>
      <input v-model="Email" placeholder="Email" type="email" required /><br>

      Recieve updates every:<br>
      <input type="radio" id='hour' name="every" checked>Hour<br>
      <input type="radio" id='day' name="every">Day<br>
      <input type="radio" id='week' name="every">Week<br>
      <button @click="$router.back()">Save</button>
    </p>
  </main>
</template>

<style scoped>
p.nav {
  border: 1px solid black;
  margin: 0 0 0px 0;
  padding: 10px 0 10px 10px;
}

p.form {
  margin-top: 0px;
  border: 1px solid black;
  padding: 10px;
}

input {
  margin: 5px;
}

input:invalid {
  border: 1px;
  background-color: #ffaadd;
}

button {
  background-color: grey;
  margin: 10px;
}
</style>
