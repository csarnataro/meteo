<template>
  <main class="main">
    <WeatherTemplate />
  </main>
</template>
<script>

import WeatherTemplate from './WeatherTemplate'

export default {
  name: 'Content',
  components: {
    WeatherTemplate
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
