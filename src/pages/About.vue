<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  data() {
    return {
      contributorsList: []
    };
  },
  methods: {
    getContributors() {
      const url = 'https://api.github.com/repos/mtuzinskiy/vue-weather/contributors';

      function getInitials(name) {
        return name
          .split(' ')
          .map((item) => item[0].toUpperCase())
          .join('');
      }
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          this.contributorsList.push(...result);
          this.contributorsList = this.contributorsList.map((item) => ({
            ...item,
            // eslint-disable-next-line no-prototype-builtins
            initials: item.name !== undefined ? getInitials(item.name) : item.login.slice(0, 2).toUpperCase()
          }));
          console.log(this.contributorsList);
        })
        .catch(() => {
          this.error = `Error`;
        });
    }
  },
  beforeMount() {
    this.getContributors();
  }
};
</script>

<template>
  <main class="main-about-section">
    <p>This application was developed by a group of enthusiasts to try out the Vue.js capabilities</p>
    <section class="about-contributors-section">
      <ul class="about-contributors-list">
        <h1>Contributors</h1>
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <li v-for="item in contributorsList" class="about-contributors-item">
          <img v-if="item.avatar_url !== ''" v-bind:src="item.avatar_url" class="about-contributors-item-avatar" />
          <span v-else class="about-contributors-item-initials">{{ item.initials }}</span>
          <span class="about-contributors-item-name">{{ item.login }}</span>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
* {
  color: #000;
  background-color: #fff;
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style-type: none;
}

.main-about-section {
  padding: 50px;
  margin: auto;
  max-width: 1280px;
}

.about-contributors-section {
  margin-top: 50px;
}
.about-contributors-item-avatar {
  height: 50px;
  border-radius: 50%;
  margin-right: 5px;
}

.about-contributors-list {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.about-contributors-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
  text-align: center;
}
.about-contributors-item-initials {
  border: 1px solid #000;
  border-radius: 50%;
  padding: 10px;
  margin-right: 5px;
}
.about-contributors-item-name {
  display: inline-block;
}
</style>
