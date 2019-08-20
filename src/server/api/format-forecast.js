const DataPoint = require('data-point')
const { formatDateFromSeconds } = require('./date-utils')
const { filterHoursModulus3, limitTo } = require('./format-forecast-utils')
const { constant, map } = DataPoint

const datapoint = DataPoint.create()

const singleForecastFormat = {
  date: ['$time', formatDateFromSeconds],
  description: '$summary',
  icon: '$icon'
}
const forecastFormatter = {
  location: constant('Milano'),
  date: ['$currently.time', formatDateFromSeconds],
  icon: '$currently.icon',
  daily: [
    '$daily.data',
    map(singleForecastFormat)
  ],
  hourly: [
    '$hourly.data',
    filterHoursModulus3,
    limitTo(7),
    map(singleForecastFormat)
  ]
}

function formatForecast (data) {
  return datapoint.resolve(forecastFormatter, data)
}

module.exports = {
  formatForecast
}
