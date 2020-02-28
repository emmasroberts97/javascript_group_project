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
import History from './components/History.vue';
import YogaTypes from './components/YogaTypes.vue';

export default {
  name: 'app',
  data() {
    return {
      selectedTab: ""
    }
  },
  components: {
    "sequence-builder": SequenceBuilder,
    "history": History,
    "yoga-types": YogaTypes
  }
}
</script>

<style lang="css" scoped>
</style>
