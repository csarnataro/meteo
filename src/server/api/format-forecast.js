const DataPoint = require('data-point')
const {
  formatDateFromSeconds,
  getFormattedHour,
  getShortDay
} = require('./date-utils')
const { filterHoursModulus3, limitTo } = require('./format-forecast-utils')
const { map } = DataPoint

const datapoint = DataPoint.create()

function id (input) {
  return input
}

function singleForecastFormat (
  temperatureReducer = id,
  shortDateReducer = id
) {
  return {
    date: ['$time', formatDateFromSeconds],
    shortDate: ['$time', shortDateReducer],
    summary: '$summary',
    icon: '$icon',
    temperature: [
      temperatureReducer,
      input => Math.round(input)
    ]
  }
}

const removeFirst = input => input.slice(1)

const forecastFormatter = {
  location: '$location',
  latlng: '$latlng',
  date: ['$data.currently.time', formatDateFromSeconds],
  icon: '$data.currently.icon',
  summary: '$data.currently.summary',
  temperature: '$data.currently.temperature',
  week: {
    summary: '$data.daily.summary',
    icon: '$data.daily.icon',
    data: [
      '$data.daily.data',
      removeFirst,
      limitTo(7),
      map(singleForecastFormat('$temperatureHigh', getShortDay))
    ] },
  today: {
    summary: '$data.hourly.summary',
    icon: '$data.hourly.icon',
    data: [
      '$data.hourly.data',
      filterHoursModulus3,
      limitTo(7),
      map(singleForecastFormat('$temperature', getFormattedHour))
    ]
  }
}

const formatForecast = (latlng, location) => data => {
  return datapoint.resolve(forecastFormatter, {
    data,
    latlng,
    location
  })
}

module.exports = {
  formatForecast
}
