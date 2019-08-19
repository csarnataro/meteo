const DataPoint = require('data-point')
const { formatForecast } = require('./format-forecast')
const data = require ('./__mocks__/api-darksky-forecast')

describe('formatForecast', () => {
  it('should just format', async () => {

    const reducer = input => formatForecast(input)
    const datapoint = DataPoint.create()
    const output = await datapoint.resolve(reducer, data)   
    console.dir(output, { depth: 10, color: true})
    expect(output).not.toBeUndefined()
  })
})
