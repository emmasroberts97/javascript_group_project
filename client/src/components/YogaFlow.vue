<template lang="html">
  <article>
    <h1>Your Yoga Flow</h1>
    <button type="button" v-on:click="clearFlow">Clear your flow</button>
    <vueper-slides autoplay duration="10000" :slide-ratio="400/400" @ready="playSlide($event)" @slide="playSlide($event)" slideContentOutside='true'>
      <vueper-slide v-for="(pose, index) in flow"
      :title="pose.english_name"
      :key="index"
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
import {eventBus} from '../main.js';


export default {
  name: "yoga-flow",
  props: ['flow'],
  components: { VueperSlides, VueperSlide },
  mounted() {
  },
  methods: {
    playSlide: function(slide) {
      let msg = new SpeechSynthesisUtterance();
      let voices = window.speechSynthesis.getVoices();
      msg.voice = voices[10];
      msg.voiceURI = "native";
      msg.volume = 3;
      msg.rate = 0.8;
      msg.pitch = 0.8;
      msg.text = "Let's get into:" + slide.currentSlide.title;
      msg.lang = 'en-US';
      speechSynthesis.speak(msg)
    },
    clearFlow: function () {
      eventBus.$emit('clear-flow', [])
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
