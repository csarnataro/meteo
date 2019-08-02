<template>
  <main class="main">
    <AddButton />
    <!-- <WeatherTemplate /> -->
  </main>
</template>
<script>

import AddButton from './AddButton'

export default {
  name: 'Content',
  components: {
    AddButton
  }
}
</script>
<style>
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