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
    <l-marker :lat-lng="withPopup">
      <l-popup>
        <div @click="innerClick">
          I am a popup
          <p v-show="showParagraph">  </p>
        </div>
      </l-popup>
    </l-marker>
    <l-marker :lat-lng="withTooltip">
      <l-tooltip :options="{ permanent: true, interactive: true }">
        <div @click="innerClick">
          This is codeClan
          <p v-show="showParagraph">
            This is where we are currently
          </p>
        </div>
      </l-tooltip>
    </l-marker>
  </l-map>
</div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data() {
    return {
      zoom: 9,
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
      alert("Click!");
    }
  }
};
</script>
