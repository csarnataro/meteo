<template>
  <div id="weather-template" class="weather-card">
    <div class="city-key" hidden></div>
    <div class="card-last-updated" hidden></div>
    <CardSpinner hidden />
    <RemoveCardButton />
    <Current 
      :location="'Roma'" 
      :date="'Venerdì 2 Agosto 2019, 21:10'" 
      :description="'Poco nuvoloso'"
      :temperature="28"
      :icon="'clear-night'"
    />
  </div>
</template>
<script>

import CardSpinner from './CardSpinner'
import Current from './current/Current'
import RemoveCardButton from './RemoveCardButton'

export default {
  name: 'WeatherTemplate',
  components: {
    CardSpinner,
    Current,
    RemoveCardButton
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