const throttle = require('../../lib/messages/throttle')

test('messages.throttle', () => {
  expect(throttle(60))
    .toEqual('Comando executado recentemente, por favor, aguarde 01:00 minutos e tente novamente.')
})
