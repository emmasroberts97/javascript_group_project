<template lang="html">
<div>
<yoga-grid :yogaPoses="yogaPoses" />
<yoga-flow :flow="flow" />
</div>
</template>

<script>

import YogaGrid from "./YogaGrid.vue";
import YogaFlow from "./YogaFlow.vue";
import {eventBus} from '../main.js';

export default {
  name: "sequence-builder",
  data() {
    return {
      yogaPoses: [],
      flow: []
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

  },
  components: {
    "yoga-grid": YogaGrid,
    "yoga-flow": YogaFlow
  }
}
</script>

<style lang="css" scoped>
</style>
