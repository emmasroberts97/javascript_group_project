<template lang="html">
<div>
<div class="card">
  <h3>{{pose.english_name}}</h3>
  <p>Sanskrit Name: {{pose.sanskrit_name}}</p>
  <img :src="pose.img_url" height="200" width="200"/>
<div>
  <button v-on:click="addFlow" type="button" name="flow">Add to Flow</button>
</div>
</div>
</div>

</template>

<script>
import {eventBus} from '../main.js';
export default {
  name: "yoga-pose",
  props: ['pose'],
  methods: {
    addFlow: function(){
      eventBus.$emit('pose-added', this.pose)
    }
  }
}
</script>

<style lang="css" scoped>
.card{
  background: white;
  float: left;
  border-style: solid;
  margin: 10px;
}

h3, p {
  padding: 5px;
}

button {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
