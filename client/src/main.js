import Vue from 'vue'
import App from './App.vue'
import {LMap, LTileLayer, LMarker, LPopup, LTooltip} from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-popup", LPopup);
Vue.component("l-tooltip", LTooltip)
export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
