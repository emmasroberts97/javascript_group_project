<template>
<div>

  <h1>Find yoga studios near you!</h1>
  <div id=map style="height: 500px; width: 90%" >
    <div style="height: 200px overflow: auto;">

    </div>
    <l-map
    v-if="showMap"
    :zoom="zoom"
    :center="center"
    :options="mapOptions"
    style="height: 80%"
    @update:center="centerUpdate"
    @update:zoom="zoomUpdate"
    >
    <l-tile-layer
    :url="url"
    :attribution="attribution"
    />

<l-marker :lat-lng="withTooltip">
  <l-tooltip :options="{ permanent: true, interactive: true }">

    <img src="../assets/codeclan-logo.png" height="20px" @click="showLongText">

      <p v-show="showParagraph">
        CodeClan
      </p>

  </l-tooltip>
</l-marker>

<map-marker v-for="(location, index) in yoga" :key="index" :location="location"/>

</l-map>
</div>
</div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import Marker from "./marker.vue";

export default {
  name: "resources",
  props: ['yoga'],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    "map-marker": Marker
  },
  data() {
    return {
      zoom: 15,
      center: latLng(55.865505, -4.2592),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(55.865505, -4.2592),
      withTooltip: latLng(55.865505, -4.2592),
      currentZoom: 11.5,
      currentCenter: latLng(55.865505, -4.2592),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert(location.name);
    },
    getLatlng(coords){
      let newCords = L.latLng(coords)
      return newCords
    },
    showInfo(){
      this.info = !this.info;
    }
  }
};
</script>

<style media="screen">

h1{
  background-color: #FFFAF0;
width: 50%;
text-align: center;
display: block;
margin-left: auto;
margin-right: auto;

}
#map{
  padding-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;

}

</style>
