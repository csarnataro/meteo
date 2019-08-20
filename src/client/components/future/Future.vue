<template>
  <div class="future">
    <div class="title">Oggi</div>
    <span v-tooltip="today_summary"><span class="icon info"></span></span>
    <div class="line-break"></div>
    <SingleItem
      v-bind:key="hour.timestamp"
      v-for="hour in hours"
      :temperature="hour.temperature"
      :shortDate="hour.shortDate"
      :icon="hour.icon" />
    <div class="line-break"></div>
    <div class="title">7 giorni</div>
    <span v-tooltip="week_summary"><span class="icon info"></span></span>
    <div class="line-break"></div>
    <SingleItem
      v-bind:key="day.timestamp"
      v-for="day in days"
      :shortDate="day.shortDate"
      :temperature="day.temperature"
      :icon="day.icon" />

  </div>
</template>

<script>
import SingleItem from './SingleItem'

export default {
  name: 'Future',
  props: {
    today_summary: String,
    week_summary: String,
    hours: Array,
    days: Array
  },
  components: {
    SingleItem
  }
}
</script>
<style scoped>

.icon.info {
  display: inline-block;
  height: 20px;
  width: 20px;
  margin-left: 10px;
  fill: lightgray;
}

.line-break {
  flex-basis: 100%;
  height: 0;
}
.future {
  display: flex;
  flex-wrap: wrap;
}
.title {
  font-size: 1.5rem;
  font-weight: bold;
}
small {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: auto;
}
@media (max-width: 450px) {
  small {
    font-size: 1.2rem
  }
}

</style>
