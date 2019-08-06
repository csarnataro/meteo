<template>
  <main class="main">
    <AddButton />
    <WeatherTemplate />
  </main>
</template>
<script>

import AddButton from './AddButton'
import WeatherTemplate from './WeatherTemplate'

export default {
  name: 'Content',
  components: {
    AddButton,
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
  padding-top: 60px;
}

</style>