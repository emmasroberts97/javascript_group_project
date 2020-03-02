<template lang="html">
<div>
<h1>Yoga Poses</h1>
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
h1{
  text-align: center;
  background-color: #FFFAF0;
}
</style>
