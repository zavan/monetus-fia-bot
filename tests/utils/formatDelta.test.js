const formatDelta = require('../../lib/utils/formatDelta')

test('utils.formatDelta: positive delta', () => {
  expect(formatDelta(13.37)).toEqual('+13.37%')
})

test('utils.formatDelta: negative delta', () => {
  expect(formatDelta(-13.37)).toEqual('-13.37%')
})
