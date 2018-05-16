const formatTimeLeft = require('../../lib/utils/formatTimeLeft')

test('utils.formatTimeLeft', () => {
  expect(formatTimeLeft(60 * 5)).toEqual('05:00')
})
