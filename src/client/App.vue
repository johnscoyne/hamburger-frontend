<template>
  <div>
    <h1>Hello World!</h1>
    <div v-for="item in menuItems" :key="item.id">
      <img :src="item.image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [],
    };
  },
  mounted() {
    const self = this;
    self.axios.get('api/menu-items').then((response) => {
      self.menuItems = response.data.menuItems;
    });
  }
}
</script>

<style>
img {
  width: 100px;
  height: 100px;
}
</style>