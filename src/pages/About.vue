<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  data() {
    return {
      //contributorsInitials: [],
      contributorsList: [
        {
          contributorsNames: 'Markel Tuzinskiy'
        },
        {
          contributorsNames: 'John Smith'
        }
      ]
    };
  },
  methods: {
    getInitials() {
      for (let i = 0; i < this.contributorsList.length; i++) {
        const arrayNew = this.contributorsList[i].contributorsNames.split(' ');
        const aaa = arrayNew.shift().charAt(0) + arrayNew.pop().charAt(0);
        return (this.contributorsList[i].contributorsInitials = aaa.toUpperCase());
      }
    }
  }
};
</script>

<template>
  <button @click="getInitials">Get</button>
  <p>About</p>
  <p>This application was developed by a group of enthusiasts to try out the Vue.js capabilities</p>

  <section>
    <h2>Contributors</h2>
    <!-- eslint-disable-next-line vue/require-v-for-key -->
    <ul v-for="initial in contributorsInitials" class="about-contributors-list">
      <li class="about-contributors-item">
        <div class="about-contributors-item-initials">{{ initial.contributorsInitials }}</div>
        <span>{{ initial.contributorsNames }}</span>
      </li>
    </ul>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quos?</p>
  </section>
</template>

<style scoped>
.about-contributors-item-initials {
  border: 1px solid #000;
  border-radius: 50%;
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
</style>
