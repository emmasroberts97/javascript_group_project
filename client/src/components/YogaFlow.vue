<template lang="html">
<article>
<h1>Your Yoga Flow</h1>
  <vueper-slides autoplay duration="10000" :slide-ratio="400/400">
    <vueper-slide v-for="(pose, index) in flow"
      :key="pose.id"
      :image="pose.img_url" />
    <template v-slot:pause>
      <i class="icon pause_circle_outline"></i>
    </template>
  </vueper-slides>
</article>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "yoga-flow",
  props: ['flow'],
  components: { VueperSlides, VueperSlide },
  methods: {
    setRatio: function() {
      for (pose of this.pose) {
        pose.img_url.height = '200px';
        pose.img_url.width = '200px';
      }
    }
  }
}
</script>

<style lang="css" scoped>
.vueperslides {
  width: 500px;
  height: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

article{
  text-align: center;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 100%;
  background-color: #FFFAF0;
}
</style>
