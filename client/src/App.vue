<template lang="html">
<div>
  <nav>
    <button type="button" name="Home" v-on:click="home">Home</button>
    <button type="button" name="History" v-on:click="history">History</button>
    <button type="button" name="Types" v-on:click="types">Yoga Types</button>
    <button type="button" name="Benefits" v-on:click="benefits">Benefits</button>
    <button type="button" name="Resources" v-on:click="resources">Resources</button>
    <button type="button" name="Flow" v-on:click="flow">Build a Flow</button>
  </nav>
  <div class="">
    <div v-if="selectedTab == 'home'">
    <h1> Our Yoga App </h1>
    <img src="../public/Birds.png" height="500px" width="500px"/>
   </div>
    <sequence-builder v-if="selectedTab == 'flow'"/>
    <history v-if="selectedTab == 'history'"/>
    <yoga-types v-if="selectedTab == 'types'" />
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
  },
  methods: {
    home: function() {
      this.selectedTab = 'home';
    },
    history: function() {
      this.selectedTab = 'history';
    },
    types: function() {
      this.selectedTab = 'types';
    },
    benefits: function() {
      this.selectedTab = 'benefits';
    },
    resources: function() {
      this.selectedTab = 'resources';
    },
    flow: function() {
      this.selectedTab = 'flow';
    }
  }
}
</script>

<style lang="css" scoped>
nav {
  display:flex;
  justify-content:space-around;
}

button {
  width: 20%;
}
</style>
