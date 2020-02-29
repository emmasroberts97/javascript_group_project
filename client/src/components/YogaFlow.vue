<template lang="html">
<div>
<h1>Your Yoga Flow</h1>
  <vueper-slides autoplay duration="10000" fixedHeight="500px">
    <vueper-slide v-for="(pose, index) in flow"
      :key="pose.id"
      :image="pose.img_url" />
    <template v-slot:pause>
      <i class="icon pause_circle_outline"></i>
    </template>
  </vueper-slides>
</div>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: "yoga-flow",
  props: ['flow'],
  components: { VueperSlides, VueperSlide }
}
</script>

<style lang="css" scoped>
</style>
