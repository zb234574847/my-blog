/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/index.vue";
import classify from "./views/classify.vue"
import articleList from "./views/articleList.vue"
import detail from "./views/detail.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children:[
        {
          path: "/classify",
          name: "classifye",
          component: classify
        },
        {
          path: "/articleList",
          name: "articleList",
          component: articleList
        },
        {
          path: "/detail",
          name: "detail",
          component: detail
        },
      ]
    }
    
//     {
//       path: "/about",
//       name: "about",
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () =>
//         //import(/* webpackChunkName: "about" */ "./views/About.vue")
//     }
  ]
});
