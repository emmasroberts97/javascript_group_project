<template lang="html">
<div>
<yoga-pose v-for="(pose, index) in yogaPoses" :key="index" :pose="pose" />
</div>
</template>

<script>

import YogaPose from './YogaPose.vue';

export default {
  name: "yoga-grid",
  props: ['yogaPoses'],
  components: {
    "yoga-pose": YogaPose
  }
}
</script>

<style lang="css" scoped>
</style>
