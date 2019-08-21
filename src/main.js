import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes/router";
import axios from "axios";
import dayjs from "dayjs";
import "./utils/filter";

import "!style-loader!css-loader!less-loader!./less/main.less";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.$day = dayjs;

const router = new VueRouter({ routes });

Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
