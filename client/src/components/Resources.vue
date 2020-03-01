<template lang="html">
<div id="yogaMap">
<h2>This is where the map will be</h2>
<!-- below is the link Ian added for the map just testing  -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""/>
    <!-- map below is the map we need this to be below the css above -->
    <src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
    crossorigin="">
 </div>

</template>

<script>
export default {
  name: 'resources'
}
</script>

<style lang="css" scoped>
#yogaMap { height: 180px; }
</style>
