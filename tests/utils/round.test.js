const round = require('../../lib/utils/round')

test('utils.round', () => {
  expect(round(13.3666)).toEqual(13.37)
})
