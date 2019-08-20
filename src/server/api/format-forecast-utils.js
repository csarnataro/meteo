const { getHour } = require('./date-utils')

const limitTo = limit => items => {
  return items.slice(0, limit)
}

const filterHoursModulus3 = items => {
  return items.filter(item => getHour(item.time) % 3 === 0)
}

module.exports = {
  limitTo,
  filterHoursModulus3
}
