<template lang="html">
<div>
  <div class="">
    <sequence-builder v-if="selectedTab"/>
    <history/>
  </div>
</div>
</template>

<script>
import SequenceBuilder from './components/SequenceBuilder.vue';
import History from './components/History.vue'

export default {
  name: 'app',
  data() {
    return {
      selectedTab: ""
    }
  },
  components: {
    "sequence-builder": SequenceBuilder,
    "history": History
  }
}
</script>

<style lang="css" scoped>
</style>
