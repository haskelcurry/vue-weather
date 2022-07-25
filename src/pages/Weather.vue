<!-- eslint-disable vue/multi-word-component-names -->
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  data() {
    return {
      searchText: '',
      results: [],
      error: ''
    };
  },
  methods: {
    search() {
      const apiKey = `4d8fb5b93d4af21d66a2948710284366`;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.searchText}&appid=${apiKey}&units=metric&lang=ua`;
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          const iconCode = result.weather[0].icon;
          const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${iconCode}.svg`;
          result.icon = icon;
          this.results.push(result);
          this.error = ``;
        })
        .catch(() => {
          this.error = `Такого міста не існує 😩`;
        });
    }
  },
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header, Footer }
};
</script>

<template>
  <Header title="Погода в селі" />
  <section>
    <input type="text" placeholder="Назва села" autofocus v-model="searchText" />
    <button @click="search">Пошук</button>
    <span class="error">{{ error }}</span>
  </section>
  <section class="results">
    <!-- eslint-disable-next-line vue/require-v-for-key -->
    <div v-for="result in results" class="result">
      <div class="name">{{ result.name }}, {{ result.sys.country }}</div>
      <div class="temp">{{ Math.round(result.main.temp) }} °C</div>
      <img :src="result.icon" />
      <div class="description">{{ result.weather[0].description }}</div>
    </div>
  </section>
  <Footer groupName="першою" />
</template>

<style scoped>
button {
  cursor: pointer;
  border: none;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.1em;
  padding: 10px 15px;
  margin-left: 15px;
  border-radius: 5px;
  color: white;
  background: #ff1e42;
  transition: background 0.3s ease-in-out;
}

button:hover {
  background: #a8142c;
}

input {
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 14px;
  padding: 10px;
  border-bottom: 1px solid;
}

input::placeholder {
  color: #aaa;
}

.result {
  background: white;
  color: black;
  border-radius: 20px;
  padding: 12px;
  margin-top: 24px;
  filter: drop-shadow(0px 8px 5px black);
}

.result .name {
  color: grey;
}

.result .temp {
  font-size: 32px;
}

.result img {
  filter: drop-shadow(3px 8px 2px grey);
}

.result .description {
  color: grey;
}
</style>
