const parseCommand = require('../../lib/utils/parseCommand')

test('utils.parseCommand', () => {
  expect(parseCommand('q natu3')).toMatchObject({
    command: 'q',
    args: 'NATU3'
  })
})
