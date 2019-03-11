/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/index.vue";
import classify from "./views/classify.vue"
import articleList from "./views/articleList.vue"
import detail from "./views/detail.vue"

Vue.use(Router);
// Router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (store.state.token) { // 通过vuex state获取当前的token是否存在
//       next();
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     next();
//   }
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
          meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
          },
          component: classify
        },
        {
          path: "/articleList",
          name: "articleList",
          meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
          },
          component: articleList
        },
        {
          path: "/detail",
          name: "detail",
          meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
          },
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
