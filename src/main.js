import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import CKEditor from "@ckeditor/ckeditor5-vue";

import "!style-loader!css-loader!less-loader!./less/main.less";
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from "element-ui";

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

Vue.use(ElementUI);
Vue.use(CKEditor);

new Vue({
  render: h => h(App)
}).$mount("#app");
