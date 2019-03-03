import Vue from "vue";
import Router from "vue-router";
import MarvelProfile from "@/components/MarvelProfile";
import MainPage from "@/components/MainPage";

Vue.use(Router);

var profiles = {
  thor: {
    title: "Thor",
    releaseDate: "May 2, 2011",
    director: "Kenneth Branagh",
    boxOffice: "$449.3 million",
    budget: "$150 million",
    imgSrc: "/static/thor.jpg"
  },

  ironMan: {
    title: "Iron Man",
    releaseDate: "May 2, 2008",
    director: "Jon Favreau",
    boxOffice: "$585.2 million",
    budget: "$140 million",
    imgSrc: "/static/ironMan.jpg"
  },

  captainAmerica: {
    title: "Captain America: The First Avenger",
    releaseDate: "July 19, 2011",
    director: "Joe Johnston",
    boxOffice: "$370.6 million",
    budget: "$140 million",
    imgSrc: "/static/captainAmerica.jpg"
  },

  avengers: {
    title: "The Avengers",
    releaseDate: "May 4, 2012",
    director: "Joss Whedon",
    boxOffice: "$1.519 billion",
    budget: "$220 million",
    imgSrc: "/static/avengers.jpg"
  }
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MainPage,
      props: { movies: profiles }
    },
    {
      path: "/thor",
      component: MarvelProfile,
      props: { profile: profiles.thor }
    },
    {
      path: "/captainAmerica",
      component: MarvelProfile,
      props: { profile: profiles.captainAmerica }
    },
    {
      path: "/avengers",
      component: MarvelProfile,
      props: { profile: profiles.avengers }
    },

    {
      path: "/ironMan",
      component: MarvelProfile,
      props: { profile: profiles.ironMan }
    }
  ]
});
