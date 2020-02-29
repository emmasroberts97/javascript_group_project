<template lang="html">
<div>
  <vueper-slides autoplay duration="10000">
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
