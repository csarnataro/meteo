<template>
  <main class="main">
    <WeatherCard
      v-bind:key="location.name"
      v-for="location in locations"
      :location="location.name"
      :latlng="location.latlng"
    />
  </main>
</template>
<script>
import WeatherCard from './WeatherCard'

export default {
  name: 'Content',
  components: {
    WeatherCard
  },
  data: function () {
    const uri = window.location.search.substring(1)
    const params = new URLSearchParams(uri)
    const locationsParams = params.getAll('location')
    const locations = locationsParams.length > 0 ? locationsParams : ['Milano']

    const latlngsParams = params.getAll('latlng')
    const latlng =
      latlngsParams.length > 0
        ? latlngsParams
        : ['45.4754304,9.2110848']

    const filteredLocations = locations
      .map((location, index) => ({
        name: location,
        latlng: latlng[index]
      }))
      .filter(item => item.name && item.latlng)

    return {
      locations: filteredLocations
    }
  }
}
</script>
<style scoped>
/**
 * Main body
 */

.main {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 0px;
}
</style>
