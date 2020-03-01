<template lang="html">
<div>
<yoga-select :flow="flow"/>
<yoga-grid v-if="selectedTab == 'Grid'" :yogaPoses="yogaPoses" />
<yoga-flow :flow="flow" v-if="selectedTab == 'Flow'"/>
</div>
</template>

<script>

import YogaGrid from "./YogaGrid.vue";
import YogaFlow from "./YogaFlow.vue";
import YogaFlowSelect from "./YogaFlowSelect.vue";
import {eventBus} from '../main.js';

export default {
  name: "sequence-builder",
  data() {
    return {
      yogaPoses: [],
      flow: [],
      selectedTab: "Grid"
    }
  },
  mounted() {
      fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
      .then(res => res.json())
      .then(data => {
        this.yogaPoses = data;
      })

      eventBus.$on('pose-added', (pose) => {
          this.flow.push(pose)
      });

      eventBus.$on('tab-change', (tab) => {
          this.selectedTab = tab
      });

  },
  components: {
    "yoga-grid": YogaGrid,
    "yoga-flow": YogaFlow,
    "yoga-select": YogaFlowSelect
  }
}
</script>

<style lang="css" scoped>
</style>
