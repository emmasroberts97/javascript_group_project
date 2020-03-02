<template>

  <div style="height: 500px; width: 100%">
    <div style="height: 200px overflow: auto;">
      <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
      <button @click="showLongText">
        Toggle long popup
      </button>
      <button @click="showMap = !showMap">
        Toggle map
      </button>
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
    <!-- <l-marker :lat-lng="withPopup">
    <l-popup>
    <div @click="innerClick">
    I am a popup
    <p v-show="showParagraph">  </p>
  </div>
</l-popup>
</l-marker> -->
<l-marker :lat-lng="withTooltip">
  <l-tooltip :options="{ permanent: true, interactive: true }">

    <div @click="showLongText">
      CodeClan
      <p v-show="showParagraph">
        The home of coding
      </p>
    </div>
  </l-tooltip>
</l-marker>

<map-marker v-for="(location, index) in yoga" :key="index" :location="location"/>
<!-- <div class="yoga-studio-marker" v-for="(location, index) in yoga" :key="index" @click="showInfo">
  <l-marker :lat-lng="getLatlng(location.latLng)">
    <l-tooltip :options="{ permanent: true, interactive: true}">
      <img v-on:mouseover="showParagraph = true" @mouseleave="showParagraph = false" :set="showDeets = showParagraph" src="../assets/mat.png" height="20px">
      <div v-show="showDeets">
        <h1>{{location.name}}</h1>
      </div>
    </l-tooltip>
  </l-marker>
</div> -->
<!-- <l-marker :lat-lng="HopeStudioYoga">
<l-tooltip :options="{ permanent: true, interactive: true}">
<div @click="innerClick">
Hope Studio Yoga
<p v-show="showParagraph">
5th Floor, Central Chambers, 404, 93 Hope St Glasgow G2 6LD
</p>
</div>
</l-tooltip>
</l-marker>
<l-marker :lat-lng="MerchantCityYoga">
<l-tooltip :options="{ permanent: true, interactive: true}">
<div @click="innerClick">
Merchant City Yoga
<p v-show="showParagraph">
2, 49 Virgina St, Glasgow G1 1TS
</p>
</div>
</l-tooltip>
</l-marker>
<l-marker :lat-lng="TheYogaExtension">
<l-tooltip :options="{ permanent: true, interactive: true}">
<div @click="innerClick">
The Yoga extension
<p v-show="showParagraph">
Suite A, 5 Newton Terrace Ln, Glasgow G3 7PB
</p>
</div>
</l-tooltip>
</l-marker>
<l-marker :lat-lng="InfintityYoga">
<l-tooltip :options="{ permanent: true, interactive: true}">
<div @click="innerClick">
Infintity Yoga
<p v-show="showParagraph">
11 Osborne St, Glasgow G1 5QN
</p>
</div>
</l-tooltip>
</l-marker>
<l-marker :lat-lng="MoveStudios">
<l-tooltip :options="{ permanent: true, interactive: true}">
<div @click="innerClick">
Move Studios
<p v-show="showParagraph">
27-45 Stockwell Pl, Glasgow G1 4HS
</p>
</div>
</l-tooltip>
</l-marker> -->
</l-map>
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
      HopeStudioYoga: latLng(55.861138, -4.259079),
      MerchantCityYoga: latLng(55.859569, -4.250090),
      TheYogaExtension: latLng(55.865791, -4.274662),
      InfintityYoga: latLng(55.855893, -4.245787),
      MoveStudios: latLng(55.856735, -4.250980),
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
