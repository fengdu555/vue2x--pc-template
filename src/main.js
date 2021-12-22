import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import andtConfig from "./utils/antdConfig/index";
import SK from 'sk-jsapi'

Vue.config.productionTip = false;

Vue.prototype.sk = SK

Vue.use(andtConfig)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
