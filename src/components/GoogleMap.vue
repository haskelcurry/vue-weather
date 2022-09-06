<script>
import { defineComponent } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map'; // https://vue3-google-map.netlify.app

export default defineComponent({
  components: { GoogleMap, Marker },
  props: {
    lat: Number,
    lon: Number
  },
  setup(props) {
    const center = { lat: props.lat, lng: props.lon };
    return { center };
  }
});
</script>

<template>
  <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" class="map" :center="center" :zoom="12">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<style scoped>
.map {
  position: relative;
  max-width: 100%;
  height: 300px;
}

.map::after {
  position: absolute;
  content: '';
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: red;
}
</style>