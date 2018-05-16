const secondsToMinuteRange = require('../../lib/utils/secondsToMinuteRange')

test('utils.secondsToMinuteRange', () => {
  expect(secondsToMinuteRange(60 * 5)).toEqual(0)
})
