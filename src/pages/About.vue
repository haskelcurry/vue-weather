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
        const firstCharOfName = arrayNew.shift().charAt(0) + arrayNew.pop().charAt(0);
        this.contributorsList[i].contributorsInitials = firstCharOfName.toUpperCase();
      }
    }
  },
  beforeMount() {
    this.getInitials();
  }
};
</script>

<template>
  <p>About</p>
  <p>This application was developed by a group of enthusiasts to try out the Vue.js capabilities</p>

  <section class="about-contributors-section">
    <h2>Contributors</h2>
    <!-- eslint-disable-next-line vue/require-v-for-key -->
    <ul v-for="initial in contributorsList" class="about-contributors-list">
      <li class="about-contributors-item">
        <div class="about-contributors-item-container">
          <span class="about-contributors-item-initials">{{ initial.contributorsInitials }}</span>
          <span class="about-contributors-item-name">{{ initial.contributorsNames }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.about-contributors-list {
  margin: 10px auto;
}
.about-contributors-item {
  display: flex;
  flex-direction: column;
  margin: 20px;
}
.about-contributors-item-initials {
  border: 1px solid #000;
  border-radius: 50%;
  padding: 5px;
}
.about-contributors-item-name {
  margin-left: 10px;
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
