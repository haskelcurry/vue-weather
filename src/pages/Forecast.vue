<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    data() {
        return {
            cityName: '',
            forecast: [],  //raw result from openweathermap
            latlon: []

        };
    },

    methods: {
        async apiRequest() {

            //const apiAnswer is an example of API response to don't disturb the real API for a while
            const apiAnswer = {
                "cod": "200",
                "message": 0,
                "cnt": 5,
                "list": [
                    {
                        "dt": 1663772400,
                        "main": {
                            "temp": 36.22,
                            "feels_like": 33.92,
                            "temp_min": 36.22,
                            "temp_max": 36.22,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 1001,
                            "humidity": 16,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "чисте небо",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 6.92,
                            "deg": 1,
                            "gust": 7.92
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-09-21 15:00:00"
                    },
                    {
                        "dt": 1663783200,
                        "main": {
                            "temp": 34.35,
                            "feels_like": 32.24,
                            "temp_min": 30.6,
                            "temp_max": 34.35,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 1003,
                            "humidity": 19,
                            "temp_kf": 3.75
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "чисте небо",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 4.91,
                            "deg": 15,
                            "gust": 7.44
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-09-21 18:00:00"
                    },
                    {
                        "dt": 1663794000,
                        "main": {
                            "temp": 30.77,
                            "feels_like": 29.07,
                            "temp_min": 28.05,
                            "temp_max": 30.77,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 1003,
                            "humidity": 24,
                            "temp_kf": 2.72
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "чисте небо",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 4.12,
                            "deg": 360,
                            "gust": 4.23
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-09-21 21:00:00"
                    },
                    {
                        "dt": 1663804800,
                        "main": {
                            "temp": 26.54,
                            "feels_like": 26.54,
                            "temp_min": 26.54,
                            "temp_max": 26.54,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 1002,
                            "humidity": 32,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "чисте небо",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 3.45,
                            "deg": 14,
                            "gust": 3.49
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-09-22 00:00:00"
                    },
                    {
                        "dt": 1663815600,
                        "main": {
                            "temp": 24.74,
                            "feels_like": 24.24,
                            "temp_min": 24.74,
                            "temp_max": 24.74,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 1003,
                            "humidity": 37,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "чисте небо",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.06,
                            "deg": 9,
                            "gust": 2.19
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-09-22 03:00:00"
                    }
                ],
                "city": {
                    "id": 360923,
                    "name": "Al Khārijah",
                    "coord": {
                        "lat": 25,
                        "lon": 30.5068
                    },
                    "country": "EG",
                    "population": 1000,
                    "timezone": 7200,
                    "sunrise": 1663731967,
                    "sunset": 1663775777
                }
            };
            var url;

            const ApiKey = `4d8fb5b93d4af21d66a2948710284366`;
            if (this.cityName == '') {

                let position = await this.currentGPS();                              // wait for the geolocation 

                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                //document.getElementById('text').innerHTML = [lat, lon];
                this.latlon=[lat, lon];

                url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric&lang=us&cnt=`;
            }
                else {
                url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&appid=${ApiKey}&units=metric&lang=us&cnt=`;

                
            }
                //next lines = real API request, (un)comment that for (on)offline dev
                fetch(url)
                    .then((response) => response.json())
                    .then((response) => {

                        this.forecast = response;
                        this.cityName = this.forecast.city.name;
                        console.log(this.forecast.city.name, this.forecast.city.country);
                        console.log(this.forecast);
                        let lat = this.forecast.city.coord.lat;
                        let lon = this.forecast.city.coord.lon;

                
                    //    document.getElementById('text').innerHTML = [lat, lon];
                        this.latlon=[lat, lon];
                    })
                //end of real API request


                //those lines is the temporary stab instead real API
                //let response=apiAnswer;
                //this.forecast = response;
                //this.cityName = this.forecast.city.name;
                //console.log(this.forecast.city.name, this.forecast.city.country);
                //end of the stab
            },
            

        

        async currentGPS() {
            // Simple wrapper
            return new Promise((res, rej) => {
                navigator.geolocation.getCurrentPosition(res, rej);
            });
        },

        iconUrl(code) {
            let u = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/';
            let r = this.forecast.list[code].weather[0].icon;
            let l = '.svg';
            let url = u + r + l;
            console.log(code);
            return url
        }

    },


   

    components: { Header, Footer }
};
</script>

<template>
    <Header :title="this.cityName" />
    <input @keyup.enter="apiRequest" v-model="cityName" placeholder="Leave empty for GPS" /> <button @click="apiRequest" >Forecast</button>
   
    <section class="result">
    <div>Next 5 days forecast at {{this.cityName}}</div>    
    <div>GPS: {{latlon}}</div>
    <ul>
        <li v-for="(x, index) in forecast.list" :key="x.dt">
            {{ new Date(x.dt * 1000).toLocaleString('us-us', { weekday: 'short' }) + ', ' }}
            {{ new Date(x.dt * 1000).toLocaleString('us-us', { day: 'numeric' }) }}
            {{ new Date(x.dt * 1000).toLocaleString('us-us', { month: 'short' }) + ', ' }}
            {{ new Date(x.dt * 1000).toLocaleString('uk-uk', { hour: '2-digit' }) + ':00' }}
            <img :src="iconUrl(index)" />
            {{ Math.round(x.main.temp_max) + ' / ' }}
            {{ Math.round(x.main.temp_min) + ' °C' }}
            {{ x.weather[0].description }}
        </li>
    </ul>
    </section>

    <Footer groupName="the slow and small" />


</template>

<style scoped>
.result {
    background: white;
    color: black;
    border-radius: 20px;
    padding: 12px;
    margin-top: 24px;
    filter: drop-shadow(0px 8px 5px black);
    font-size: 22px;
  }
  
  .result img {
    filter: drop-shadow(3px 8px 2px grey);
  }
  </style>