import Vue from "vue"
import router from "./router"
import App from "./App"
Vue.config.productionTip = false
console.log(router)
new Vue({
    el: "#app",
    router,
    components: { App },
    template: '<App/>',
})