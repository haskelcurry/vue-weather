<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    data() {
        return {
            cityName: '',   // resolved or inputed name of city
            forecast: [],   // raw result from openweathermap
            latlon: []      // resolved or obtained gps coordinates of city

        };
    },

    methods: {
        async apiRequest() {    //asq API onButtonClick

            //const apiAnswer is an example of full API response to don't disturb the real API for a while
            /*   const apiAnswer = {
                "cod": "200",
                "message": 0,
                ...
            };
            */

            var url;
            const ApiKey = `4d8fb5b93d4af21d66a2948710284366`;
            if (this.cityName == '') {                                     // send request on coordinates
                let position = await this.currentGPS();                    // wait for the geolocation 
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                this.latlon=[lat, lon];
                url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric&lang=us&cnt=`;
            }
                else {                                                      //send request on city's name 
                url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&appid=${ApiKey}&units=metric&lang=us&cnt=`;                
            }
                //The real API request  to get response from the server
                fetch(url)
                    .then((response) => response.json())
                    .then((response) => {

                        this.forecast = response;
                        this.cityName = this.forecast.city.name;
                        console.log(this.forecast.city.name, this.forecast.city.country);   //to check what we got
                        //console.log(this.forecast);                                       //to get full response
                        let lat = this.forecast.city.coord.lat;
                        let lon = this.forecast.city.coord.lon;
                        this.latlon=[lat, lon];
                    })
                //end of real API request

                //5 lines are the temporary stab instead real API
                //let response=apiAnswer;
                //this.forecast = response;
                //this.cityName = this.forecast.city.name;
                //console.log(this.forecast.city.name, this.forecast.city.country);
                //end of the stab
            },
            
        async currentGPS() {
            return new Promise((res, rej) => {
                navigator.geolocation.getCurrentPosition(res, rej);
            });
        },

        iconUrl(code) {             //substituting weather code to put in <ul> nice icons
            let u = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/';
            let r = this.forecast.list[code].weather[0].icon;
            let l = '.svg';
            let url = u + r + l;
            //console.log(code);    //to count entities in forecast.list[] in API response 
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