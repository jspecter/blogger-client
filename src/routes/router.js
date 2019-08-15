const routes = [
  {
    path: "/",
    redirect: "/tech"
  },
  {
    path: "/tech",
    component: () => import("@/views/tech.vue")
  },
  {
    path: "/music",
    component: () => import("@/views/music.vue")
  },
  {
    path: "/novel",
    component: () => import("@/views/novel.vue")
  },
  {
    path: "/spark",
    component: () => import("@/views/spark.vue")
  }
];

export default routes;
