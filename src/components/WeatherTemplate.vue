<template>
  <div id="weather-template" class="weather-card">
    <div class="city-key" hidden></div>
    <div class="card-last-updated" hidden></div>
    <CardSpinner :hidden="!this.loading" />
    <Current
      :location="this.location"
      :date="this.date"
      :description="this.description"
      :temperature="Math.round(this.temperature)"
      :icon="this.icon"
      :humidity="90"
      :wind="3"
    />
    <Future :hours="[
      {temperature: 10, timestamp: 1, icon:'clear-day'},
      {temperature: 20, timestamp: 2, icon:'cloudy' },
      {temperature: 20, timestamp: 3, icon:'cloudy' },
      {temperature: 20, timestamp: 4, icon:'cloudy' },
      {temperature: 20, timestamp: 5, icon:'cloudy' },
      {temperature: 20, timestamp: 6, icon:'cloudy' },
      {temperature: 20, timestamp: 7, icon:'cloudy' },
    ]"
    :days="[
      {temperature: 10, timestamp: 1, icon:'clear-day'},
      {temperature: 20, timestamp: 2, icon:'cloudy' },
      {temperature: 20, timestamp: 3, icon:'cloudy' },
      {temperature: 20, timestamp: 4, icon:'cloudy' },
      {temperature: 20, timestamp: 5, icon:'cloudy' },
      {temperature: 20, timestamp: 6, icon:'cloudy' },
      {temperature: 20, timestamp: 7, icon:'cloudy' },

    ]"/>
  </div>
</template>
<script>

import CardSpinner from './CardSpinner'
import Current from './current/Current'
import Future from './future/Future'

export default {
  name: 'WeatherTemplate',
  components: {
    CardSpinner,
    Current,
    Future
  },
  data () {
    return {
      location: '--',
      description: '--',
      date: '--',
      temperature: null,
      icon: null

    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      const url = `/api/forecast`
      fetch(url)
        .then(response => response.json())
        .then(data => {
          /* eslint-disable no-console */
          console.log('****************')
          console.log(url)
          console.dir(data)
          console.log('****************')
          this.date = data.date
          this.location = data.location
          this.description = data.currently.summary
          this.icon = data.currently.icon
          this.temperature = data.currently.temperature
          this.loading = false
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(`Error: ${error}`)
        })
    }
  }

}
</script>
<style scoped>
/**
 * Weather forecast card
 */

.weather-card {
  background: #fff;
  border-radius: 2px;
  box-shadow:
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  margin: 16px;
  padding: 16px;
  position: relative;
}

.weather-card .future {
  display: flex;
}

.weather-card .future .oneday {
  flex-grow: 1;
  text-align: center;
}

.weather-card .future .oneday .icon {
  height: 64px;
  margin-left: auto;
  margin-right: auto;
  width: 64px;
}

.weather-card .future .oneday .temp-high,
.weather-card .future .oneday .temp-low {
  display: inline-block;
}

.weather-card .future .oneday .temp-low {
  color: #666;
}

@media (max-width: 450px) {

  .weather-card .current .icon {
    height: 96px;
    width: 96px;
  }

  .weather-card .current .visual {
    font-size: 3em;
  }

  .weather-card .future .oneday .icon {
    height: 32px;
    width: 32px;
  }
}

</style>
