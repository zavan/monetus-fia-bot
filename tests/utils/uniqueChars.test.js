const uniqueChars = require('../../lib/utils/uniqueChars')

test('utils.uniqueChars', () => {
  const str = 'abcABCabc'

  expect(uniqueChars(str)).toEqual(['a', 'b', 'c', 'A', 'B', 'C'])
})
