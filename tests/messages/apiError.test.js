const apiError = require('../../lib/messages/apiError')

test('messages.apiError', () => {
  expect(apiError())
    .toEqual('Comando indisponível no momento, por favor, tente novamente mais tarde.')
})
