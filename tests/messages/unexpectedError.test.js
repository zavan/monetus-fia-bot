const unexpectedError = require('../../lib/messages/unexpectedError')

test('messages.unexpectedError', () => {
  expect(unexpectedError())
    .toEqual('Ocorreu um erro inesperado, por favor, comunique @zavan.')
})
