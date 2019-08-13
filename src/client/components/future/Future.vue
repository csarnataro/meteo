<template>
  <div class="future">
    <h1>Oggi</h1>
    <div class="line-break"></div>
    <SingleItem
      v-bind:key="hour.timestamp"
      v-for="hour in hours"
      :temperature="hour.temperature"
      :icon="hour.icon" />
    <div class="line-break"></div>
    <h1>Prossimi giorni</h1>
    <div class="line-break"></div>
    <SingleItem
      v-bind:key="day.timestamp"
      v-for="day in days"
      :temperature="day.temperature"
      :icon="day.icon" />

  </div>
</template>

<script>
import SingleItem from './SingleItem'

export default {
  name: 'Future',
  props: {
    hours: Array,
    days: Array
  },
  components: {
    SingleItem
  }
}
</script>
<style scoped>
.line-break {
  flex-basis: 100%;
  height: 0;
}
.future {
  display: flex;
  flex-wrap: wrap;
}
</style>
