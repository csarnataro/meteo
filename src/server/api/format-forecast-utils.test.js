const { DateTime } = require('luxon')

const {
  limitTo,
  filterHoursModulus3
} = require('./format-forecast-utils')

describe('limitTo', () => {
  it('should limit to 3 items', () => {
    const output = limitTo(3)([1, 2, 3, 4])
    expect(output).toEqual([1, 2, 3])
  })
  it('should not limit when size == items.length', () => {
    const output = limitTo(4)([1, 2, 3, 4])
    expect(output).toEqual([1, 2, 3, 4])
  })
  it('should not limit when size > items.length', () => {
    const output = limitTo(45)([1, 2, 3, 4])
    expect(output).toEqual([1, 2, 3, 4])
  })
})

describe('filterHoursModulus3', () => {
  it('should show only items with hour % 3', () => {
    const items = require('./__mocks__/api-darksky-forecast').hourly.data
    const output = filterHoursModulus3(items)
    expect(output.map(item => {
      const dt = DateTime.fromSeconds(item.time)
      dt.setLocale('it')
      return dt.toFormat('HH:mm')
    })).toMatchSnapshot()
  })
})
