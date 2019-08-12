<template>
  <div id="app">
    <PageWrapper />
  </div>
</template>

<script>
import PageWrapper from './components/PageWrapper.vue'

export default {
  name: 'app',
  components: {
    PageWrapper
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  color: #444;
  font-family: "Helvetica", "Verdana", sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

html {
  overflow: hidden;
}

body {
  align-content: stretch;
  align-items: stretch;
  background: #ececec;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.icon {
  background-repeat: no-repeat;
  background-size: contain;
}

/**
 * Icons
 */

.icon {
  background-repeat: no-repeat;
  background-size: contain;
}

.icon.add {
  background-image: url("/img/add.svg");
}

.icon.clear-day {
  background-image: url("/img/weather-icons/clear-day.svg");
}

.icon.clear-night {
  background-image: url("/img/weather-icons/clear-night.svg");
}

.icon.rain {
  background-image: url("/img/weather-icons/rain.svg");
}

.icon.snow {
  background-image: url("/img/weather-icons/snow.svg");
}

.icon.sleet {
  background-image: url("/img/weather-icons/sleet.svg");
}

.icon.wind {
  background-image: url("/img/weather-icons/wind.svg");
}

.icon.fog {
  background-image: url("/img/weather-icons/fog.svg");
}

.icon.cloudy {
  background-image: url("/img/weather-icons/cloudy.svg");
}

.icon.partly-cloudy-day {
  background-image: url("/img/weather-icons/partly-cloudy-day.svg");
}

.icon.partly-cloudy-night {
  background-image: url("/img/weather-icons/partly-cloudy-night.svg");
}

.icon.hail {
  background-image: url("/img/weather-icons/hail.svg");
}

.icon.thunderstorm {
  background-image: url("/img/weather-icons/thunderstorm.svg");
}

.icon.tornado {
  background-image: url("/img/weather-icons/tornado.svg");
}

</style>
