const DataPoint = require('data-point')
const {
  formatDateFromSeconds,
  getFormattedHour,
  getShortDay
} = require('./date-utils')
const { filterHoursModulus3, limitTo } = require('./format-forecast-utils')
const { constant, map } = DataPoint

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
  location: constant('Milano'),
  date: ['$currently.time', formatDateFromSeconds],
  icon: '$currently.icon',
  summary: '$currently.summary',
  temperature: '$currently.temperature',
  week: {
    summary: '$daily.summary',
    icon: '$daily.icon',
    data: [
      '$daily.data',
      removeFirst,
      limitTo(7),
      map(singleForecastFormat('$temperatureHigh', getShortDay))
    ] },
  today: {
    summary: '$hourly.summary',
    icon: '$hourly.icon',
    data: [
      '$hourly.data',
      filterHoursModulus3,
      limitTo(7),
      map(singleForecastFormat('$temperature', getFormattedHour))
    ]
  }
}

function formatForecast (data) {
  return datapoint.resolve(forecastFormatter, data)
}

module.exports = {
  formatForecast
}
