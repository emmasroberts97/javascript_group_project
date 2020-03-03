<template lang="html">
<div>
  <select v-model="selectedTab" v-on:change="selectTab">
    <option value="Grid" selected default>View all Poses</option>
    <option value="Flow" v-if="flow">View your Flow</option>
  </select>
</div>
</template>

<script>
import {eventBus} from '../main.js';
export default {
  name: "yoga-select",
  props: ['flow'],
  data() {
    return {
      selectedTab: ""
    }
  },
  methods: {
    selectTab: function() {
      eventBus.$emit('tab-change', this.selectedTab)
    }
  }
}
</script>

<style lang="css" scoped>
select {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
</style>
