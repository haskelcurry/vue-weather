<!-- eslint-disable vue/multi-word-component-names -->
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  data() {
    return {
      searchText: '',
      results: [],
      error: '',
      lat: '',
      lon: '',
      cities: []
    };
  },
  methods: {
    search() {
      const apiKey = `4d8fb5b93d4af21d66a2948710284366`;
      let url = '';
      if (this.searchText !== '') {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${this.searchText}&appid=${apiKey}&units=metric&lang=ua`;
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${apiKey}&units=metric&lang=ua`;
      }
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          const iconCode = result.weather[0].icon;
          const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${iconCode}.svg`;
          result.icon = icon;
          const foundItem = this.results.findIndex(
            (item) => item.coord.lat === result.coord.lat && item.coord.lon === result.coord.lon
          );
          if (foundItem === -1) {
            this.results.push(result);
            this.cities.push(result.name);
          } else {
            this.results[foundItem] = result;
          }
          this.error = ``;
        })
        .catch(() => {
          this.error = `Такого міста не існує 😩`;
        });
    },
    getGPS() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showLocation);
      } else {
        this.error = 'GPS is not supported.';
      }
    },
    showLocation(location) {
      this.lat = location.coords.latitude;
      this.lon = location.coords.longitude;
    }
  },
  mounted() {
    this.getGPS();
  },
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header, Footer }
};
</script>

<template>
  <Header title="Погода в: " />
  <!-- eslint-disable-next-line vue/require-v-for-key -->
  <span>{{ cities.join(', ') }}</span>
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
span {
  color: #f13d06;
  font-size: 1.3em;
}

section {
  margin-top: 20px;
}

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
