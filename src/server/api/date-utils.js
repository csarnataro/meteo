const { DateTime } = require('luxon')

const days = {
  1: 'Lunedì',
  2: 'Martedì',
  3: 'Mercoledì',
  4: 'Giovedì',
  5: 'Venerdì',
  6: 'Sabato',
  7: 'Domenica'
}

const months = {
  1: 'Gennaio',
  2: 'Febbraio',
  3: 'Marzo',
  4: 'Aprile',
  5: 'Maggio',
  6: 'Giugno',
  7: 'Luglio',
  8: 'Agosto',
  9: 'Settembre',
  10: 'Ottobre',
  11: 'Novembre',
  12: 'Gennaio'
}

const formatDateFromSeconds = input => {
  const dt = DateTime.fromSeconds(input)
  dt.setLocale('it')
  const forecastFrom = `${days[dt.weekday]} ${dt.toFormat('dd')} ${months[dt.month]}, ${dt.toFormat('HH:mm')}`
  return forecastFrom
}

const getHour = input => {
  const dt = DateTime.fromSeconds(input)
  dt.setLocale('it')
  return dt.hour
}

module.exports = {
  formatDateFromSeconds,
  getHour
}
