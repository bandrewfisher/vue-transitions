<template>
  <div>
    <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
      <h1 v-if="h1Render">Welcome to the Marvel Movie Explorer</h1>
    </transition>

    <transition-group
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <MoviePreview
        v-for="(movie,key) in shownMovies"
        :key="movie.title"
        :title="movie.title"
        :imgSrc="movie.imgSrc"
        :link="'/'+key"
      />
    </transition-group>
  </div>
</template>

<script>
import _ from "underscore";
import MoviePreview from "@/components/MoviePreview";
export default {
  props: {
    movies: Object
  },
  components: {
    MoviePreview
  },
  data: function() {
    return {
      h1Render: false,
      showMovies: false,
      shownMoviesBools: {}
    };
  },

  beforeRouteEnter: function(to, from, next) {
    next(vm => {
      //Drop in the title
      setTimeout(() => (vm.h1Render = true), 10);
      setTimeout(() => (vm.showMovies = true), 10);
    });
  },

  beforeRouteLeave: function(to, from, next) {
    this.h1Render = false;
    this.showMovies = false;
    setTimeout(() => next(), 800);
  },

  computed: {
    shownMovies: function() {
      if (this.showMovies) {
        return this.movies;
      } else {
        return {};
      }
    }
  }
};
</script>

<style scoped>
div {
  margin-top: 30px;
}

* {
  overflow: hidden;
}
</style>
