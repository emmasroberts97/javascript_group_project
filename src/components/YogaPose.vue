<template lang="html">
<div class="card">
  <h3>{{pose.english_name}}</h3>
  <p>Sanskrit Name: {{pose.sanskrit_name}}</p>
  <img :src="pose.img_url" height="200" width="200"/>
</div>

</template>

<script>
export default {
  name: "yoga-pose",
  props: ['pose']
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
</style>
