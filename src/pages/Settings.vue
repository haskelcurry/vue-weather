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
<button @click="back" class="btn btn-primary">Назад</button>
  <input v-model="text" placeholder="Default Address">
  <p>{{ text }}</p>
  <form action= ''>
  <legend>Units</legend><br>
     <input name='recommended-by' value='Metric' type='radio'>Metric
     <br/>
     <input name='recommended-by' value='Standart' type='radio'>Standart
     <br/>
     <input name='recommended-by' value='Imperial' type='radio'>Imperial
   </form><br>
   <div><br/>
    <legend id="Language">Language</legend><br>
    <select id='dropdown'>
    <br/>
      <option>UA</option>
      <option>EN</option>
      <option>DE</option>
    </select>
  </div><br>
  <br/>
<button id="save" type="save">Save</button>
</template>

<style>
button {
  cursor: pointer;
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 15px;
  margin-left: 100px;
}
</style>