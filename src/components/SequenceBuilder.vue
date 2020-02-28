<template lang="html">
<div>
<yoga-grid :yogaPoses="yogaPoses" />
</div>
</template>

<script>

import YogaGrid from "./YogaGrid.vue";

export default {
  name: "sequence-builder",
  data() {
    return {
      yogaPoses: []
    }
  },
  mounted() {
      fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
      .then(res => res.json())
      .then(data => {
        this.yogaPoses = data;
      })
  },
  components: {
    "yoga-grid": YogaGrid
  }
}
</script>

<style lang="css" scoped>
</style>
