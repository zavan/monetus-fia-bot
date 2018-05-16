const parseCommand = require('../../lib/utils/parseCommand')

test('utils.parseCommand: with argument', () => {
  expect(parseCommand('q natu3')).toMatchObject({
    command: 'q',
    args: 'NATU3'
  })
})

test('utils.parseCommand: with no argument', () => {
  expect(parseCommand('q')).toMatchObject({
    command: 'q',
    args: ''
  })
})
