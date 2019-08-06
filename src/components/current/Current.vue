<template>
  <div>
    <GeneralInfo 
      :location="location"
      :date="date" 
      :description="description"
    />
    <div class="current">
      <Visual :temperature="temperature" :icon="icon"/>
      <Description />
    </div>
  </div>
</template>

<script>
import GeneralInfo from './GeneralInfo'
import Visual from './Visual'
import Description from './Description'

export default {
  name: 'Current',
  props: {
    location: String, 
    date: String, 
    description: String,
    temperature: Number,
    icon: String,
    humidity: Number,
    wind: Number,
    windDirection: String,
    sunrise: String,
    sunset: String
  },
  components: {
    GeneralInfo,
    Visual,
    Description
  },
}
</script>
<style scoped>
.current {
  display: flex;
}

.current .icon {
  height: 128px;
  width: 128px;
}
</style>