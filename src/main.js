import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js' //����·��
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

var Cesium = require('cesium/Cesium');
var widgets = require('cesium/Widgets/widgets.css');
Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets


Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app')