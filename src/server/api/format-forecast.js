const { DateTime } = require('luxon')
const months = require('./months')
const days = require('./days')

function formatForecast (data) {
  let dt = DateTime.fromSeconds(data.currently.time)
  dt.setLocale('it')
  const forecastFrom = `
    ${days[dt.weekday]}
    ${dt.toFormat('dd')}
    ${months[dt.month]},
    ${dt.toFormat('HH:mm')}
  `
  // .setZone(data.timezone)
  // .toFormat('DDDD t')
  // const formattedDate = new Date(forecastDate).toLocaleDateString('it-IT')
  return Object.assign({}, data, {
    location: 'Milano',
    date: forecastFrom
  })
}

module.exports = {
  formatForecast
}
