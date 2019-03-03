<template>
  <div class="header">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/thor">Thor</router-link>
      </li>
      <li>
        <router-link to="/captainAmerica">Captain America</router-link>
      </li>
      <li>
        <router-link to="/ironMan">Iron Man</router-link>
      </li>
      <li>
        <router-link to="/avengers">The Avengers</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: black;
  height: 50px;
  z-index: 10;
}

li {
  display: inline;
  text-decoration: none;
  color: white;
  margin-right: 10px;
  background-color: black;
}

a:hover {
  transition: 0.5s background-color ease;
  background-color: #007bff;
}

a {
  color: white;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px;
  transition: 0.5s background-color ease;
}
</style>
