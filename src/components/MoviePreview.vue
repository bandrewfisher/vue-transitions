<template>
  <div>
    <router-link :to="link">
      <img :src="imgSrc">
    </router-link>
    <h2>{{title}}</h2>
  </div>
</template>


<script>
export default {
  props: {
    imgSrc: String,
    title: String,
    link: String
  }
};
</script>

<style scoped>
div {
  display: inline-block;
  width: 20%;
  height: 20%;
  vertical-align: top;
  margin-right: 20px;
}
img {
  width: 150px;
  height: 200px;
  transition: 0.5s width ease, 0.5s height ease;
}

img:hover {
  cursor: pointer;
  width: 210px;
  height: 280px;
  transition: 0.5s width ease, 0.5s height ease;
}
</style>
