<template lang="html">
<div class="card">
  <p>{{pose.sanskrit_name}}</p>
  <p>{{pose.english_name}}</p>
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
</style>
