<template lang="html">

  <div class="">
    <sequence-builder />
    <history/>
  </div>

</template>

<script>
import SequenceBuilder from './components/SequenceBuilder.vue';
import History from './components/History.vue'

export default {
  name: 'app',
  components: {
    "sequence-builder": SequenceBuilder,
    "history": History
  }
}
</script>

<style lang="css" scoped>
</style>
