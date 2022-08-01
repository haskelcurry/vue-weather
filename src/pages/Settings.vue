<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>

<template>
  <input v-model="text" placeholder="Default Address">
  <p>{{ text }}</p>
  <h1>Units</h1>
     <input name='recommended-by' value='Metric' type='radio'>Metric
     <input name='recommended-by' value='Standart' type='radio'>Standart
     <input name='recommended-by' value='Imperial' type='radio'>Imperial
<h1 id = 'Language'> Language</h1>
<select id='dropdown'>
     <option>UA</option>
     <option>EN</option>
     <option>DE</option>
</select>

<button id="save" type="save">Save</button>
</template>
<style>
</style>