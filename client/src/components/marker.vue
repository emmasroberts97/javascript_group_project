<template lang="html">
  <div>
    <l-marker :lat-lng="getLatlng(location.latLng)">
      <l-tooltip :options="{ permanent: true, interactive: true}">
        <img src="../assets/mat.png" height="20px" v-on:mouseover="showInfo = true" @mouseleave="showInfo = false">
        <div v-show="showInfo">
          <h3>{{location.name}}</h3>
          <p>{{location.location}}</p>
        </div>
      </l-tooltip>
    </l-marker>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
export default {
  name: "map-marker",
  data(){
    return{
      showInfo:false
    }
  },
  props: ['location'],

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  methods:{
    getLatlng(coords){
      let newCords = L.latLng(coords)
      return newCords
    }
    // ,

  }
}


</script>

<style lang="css" scoped>
</style>
