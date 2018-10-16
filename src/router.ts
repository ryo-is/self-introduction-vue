import Vue from "vue";
import Router from "vue-router";

import Home from "./components/home/Home.vue";
import Profile from "./components/profile/Profile.vue";
import Language from "./components/language/Language.vue";
import Favorite from "./components/favorite/Favorite.vue";
import CloudService from "./components/cloudService/CloudService.vue";
import Contact from "./components/contact/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/language",
      name: "language",
      component: Language
    },
    {
      path: "/favorite",
      name: "favorite",
      component: Favorite
    },
    {
      path: "/cloudService",
      name: "cloudService",
      component: CloudService
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
