<template>
  <transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
    <div v-if="divRendered" class="main-content">
      <h1>{{profile.title}}</h1>
      <div class="float-left">
        <ul>
          <transition enter-active-class="animated fadeIn">
            <li v-if="relDateRend">
              <strong>Release date:</strong>
              {{profile.releaseDate}}
            </li>
          </transition>
          <transition enter-active-class="animated fadeIn">
            <li v-if="directorRend">
              <strong>Director:</strong>
              {{profile.director}}
            </li>
          </transition>
          <transition enter-active-class="animated fadeIn">
            <li v-if="boxOffRend">
              <strong>Box office:</strong>
              {{profile.boxOffice}}
            </li>
          </transition>
          <transition enter-active-class="animated fadeIn">
            <li v-if="budgetRend">
              <strong>Budget:</strong>
              {{profile.budget}}
            </li>
          </transition>
        </ul>
      </div>
      <div class="float-right">
        <img :src="profile.imgSrc">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    profile: Object
  },
  data: function() {
    return {
      divRendered: false, //Render movie card display
      relDateRend: false, //Render release date
      directorRend: false, //Render director
      boxOffRend: false, //Render box office
      budgetRend: false //render budget
    };
  },

  methods: {
    /**
     * Since switching between movies
     * shows this same component,
     * reset has to be called
     * so that the animations still
     * happen.
     */
    reset() {
      this.divRendered = false;
      this.relDateRend = false;
      this.directorRend = false;
      this.boxOffRend = false;
      this.budgetRend = false;
    }
  },

  /**
   * Run the animations on main card display
   * when the route is entered.
   */
  beforeRouteEnter: function(to, from, next) {
    next(vm => {
      var baseTime = 950; //About how long it takes to flip in
      var transitionTime = 175; //How long to wait between displaying rows

      //Render main card after brief delay
      setTimeout(() => (vm.divRendered = true), 10);

      //Display each row of movie info
      setTimeout(() => (vm.relDateRend = true), baseTime);
      setTimeout(() => (vm.directorRend = true), baseTime + transitionTime);
      setTimeout(() => (vm.boxOffRend = true), baseTime + 2 * transitionTime);
      setTimeout(() => (vm.budgetRend = true), baseTime + 3 * transitionTime);
    });
  },

  //Flip the main card out before leaving
  beforeRouteLeave: function(to, from, next) {
    //Give enough time to flip out
    //by going to next route after
    //Promise resolution
    new Promise(resolve => {
      this.reset();
      setTimeout(() => resolve("done"), 800);
    }).then(() => {
      next();
    });
  }
};
</script>

<style scoped>
div {
  box-sizing: border-box;
}
.main-content {
  border: 4px solid black;
  border-radius: 5px;
  width: 50%;
  margin: auto;
  overflow: auto;
  padding-bottom: 10px;
  font-size: 20px;
}

.float-left {
  float: left;
  width: 50%;
}

.float-right {
  float: right;
  width: 50%;
}

ul {
  list-style-type: none;
}

img {
  width: 170px;
}

li {
  padding-bottom: 5px;
}
</style>
