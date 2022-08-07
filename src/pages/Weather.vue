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
      coords: {},
      cities: []
    };
  },
  methods: {
    async search() {
      await this.getGPS();
      const apiKey = `4d8fb5b93d4af21d66a2948710284366`;
      let url = '';
      if (this.searchText !== '') {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${this.searchText}&appid=${apiKey}&units=metric&lang=ua`;
      } else {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.coords.latitude}&lon=${this.coords.longitude}&appid=${apiKey}&units=metric&lang=ua`;
      }
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          const iconCode = result.weather[0].icon;
          const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${iconCode}.svg`;
          const locationGoogleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${this.coords.latitude},${this.coords.longitude}`;
          result.icon = icon;
          result.locationGoogleMapsUrl = locationGoogleMapsUrl;
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
    async getGPS() {
      await new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          (err) => {
            reject(err);
            this.error = err.message;
          };
        }
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
            this.coords = position.coords;
          },
          (err) => {
            reject(err);
            this.error = err.message;
          }
        );
      });
    }
  },
  mounted() {
    this.search();
  },
  components: { Header, Footer }
};
</script>

<template>
  <Header title="Погода в: " />
  <span>{{ cities.join(', ') }}</span>
  <section>
    <input type="text" placeholder="Назва села" autofocus v-model="searchText" />
    <button @click="search">Пошук</button>
    <span class="error">{{ error }}</span>
  </section>
  <section class="results">
    <div v-for="result in results" class="result">
      <a :href="result.locationGoogleMapsUrl" target="_blank">{{ result.coord.lat + ',' + result.coord.lon }}</a>
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

.error {
  padding: 5px;
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
