<template lang="html">

</template>

<script>
export default {
  name: "sequence-builder",
  data() {
    return {
      yogaPoses: []
    }
  },
  mounted() {
      fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
      .then(res => res.json())
      .then(data => {
        this.yogaPoses = data;
      })
  }
}
</script>

<style lang="css" scoped>
</style>
