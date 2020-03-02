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
    <article v-if="selectedTab == 'home'">
    <h1> Our Yoga App </h1>
    <img src="../public/Birds.png" height="500px" width="500px"/>
  </article>
    <sequence-builder v-if="selectedTab == 'flow'"/>
    <history v-if="selectedTab == 'history'"/>
    <yoga-types v-if="selectedTab == 'types'" />
    <benefits v-if="selectedTab == 'benefits'"/>
    <resources :yoga="this.yoga_locations" v-if="selectedTab == 'resources'"/>
  </div>
</div>
</template>

<script>
import SequenceBuilder from './components/SequenceBuilder.vue';
import History from './components/History.vue';
import YogaTypes from './components/YogaTypes.vue';
import Benefits from './components/benefits.vue';
import Resources from './components/Resources.vue';
export default {
  name: 'app',
  data() {
    return {
      selectedTab: "home",
      yoga_locations:[]
    }
  },
mounted(){
  fetch('http://localhost:3000/api/manage')
  .then(response => response.json())
  .then(data => this.yoga_locations = data)
},

  components: {
    "sequence-builder": SequenceBuilder,
    "history": History,
    "yoga-types": YogaTypes,
    "benefits": Benefits,
    "resources": Resources
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

article{
  text-align: center;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 100%;
  background-color: #FFFAF0;
}


nav {
  display:flex;
  justify-content:space-around;
}

button {
  width: 20%;
  background-color: #FFFAF0;
  color: #444;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  transition: 0.4s;
}

.active, button:hover {
  background-color: #FFB6C1;
}
</style>
