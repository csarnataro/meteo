const { formatForecast } = require('./format-forecast')
const data = require('./__mocks__/api-darksky-forecast')

describe('formatForecast', () => {
  it('should format', async () => {
    const output = await formatForecast(data)
    expect(output).not.toBeUndefined()
    expect(output).toMatchSnapshot()
  })
})
