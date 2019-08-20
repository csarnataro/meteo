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
    <Future 
      :today_summary="this.today.summary"
      :week_summary="this.week.summary"
      :hours="this.today.data"
      :days="this.week.data"
    />
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
      icon: null,
      today: {
        summary: '--',
        data: []
      },
      week: {
        summary: '--',
        data: []

      },
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
          this.date = data.date
          this.location = data.location
          this.description = data.summary
          this.icon = data.icon
          this.temperature = data.temperature
          this.today = data.today
          this.week = data.week
          this.loading = false
        })
        .catch((error) => {
          this.location = `Error: ${error}`
          this.loading = false
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
