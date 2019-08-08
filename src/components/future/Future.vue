<template>
  <div class="future">
    <SingleDay 
      v-bind:key="day.timestamp" 
      v-for="day in days" 
      :temperature="day.temperature"
      :icon="day.icon" />
  </div>
</template>

<script>
import SingleDay from './SingleDay'

export default {
  name: 'Future',
  props: {
    days: Array
  },
  components: {
    SingleDay
  },
}
</script>
<style scoped>
.future {
  display: flex;
}
</style>