const secondsToMinutes = require('../../lib/utils/secondsToMinutes')

test('utils.secondsToMinutes', () => {
  const minuteInSeconds = 60

  expect(secondsToMinutes(minuteInSeconds * 5)).toEqual(5)
})
