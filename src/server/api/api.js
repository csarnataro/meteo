const express = require('express')
const fetch = require('node-fetch')
const router = express.Router()
const { DateTime } = require('luxon')
const months = require('./months')
const days = require('./days')

const API_KEYS = [
  'e6af5b5feb891b272e18f5e2fc0370a6',
  '60bb82076d33e48d2cb2480bd4a8f897',
  '15f8bf5641489ec32f66662221933c14',
  '582cb3a77cc9a6ffd73b06b85c04ad8a'
]
// process.env.DARKSKY_API_KEY;
const BASE_URL = `https://api.darksky.net/forecast`

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

/**
 * Gets the weather forecast from the Dark Sky API for the given location.
 *
 * @param {Request} req request object from Express.
 * @param {Response} resp response object from Express.
 */
function getForecast (req, resp) {
  console.log('Received forecast request')
  const location = req.params.location || '45.4754304,9.2110848'
  const url = `${BASE_URL}/${API_KEYS[1]}/${location}?lang=it&units=si`
  console.log(url)
  // resp.json(generateFakeForecast(location));
  fetch(url).then((response) => {
    if (response.status !== 200) {
      throw new Error(response.statusText)
    }
    return response.json()
  }).then(data => {
    let dt = DateTime.fromSeconds(data.currently.time)
    // let f = { month: 'long', day: 'numeric' }
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
  }).then(data => resp.json(data))
    .catch((err) => {
      console.error('Dark Sky API Error:', err.message)
      resp.json({ error: err })
    })
}

// define the home page route
router.get('/forecast', function (req, res) {
  getForecast(req, res)
})

module.exports = router
