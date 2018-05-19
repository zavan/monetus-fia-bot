const alreadySubscribed = require('../../lib/messages/alreadySubscribed')

test('messages.alreadySubscribed', () => {
  expect(alreadySubscribed()).toEqual('Você já está inscrito para receber notificações.')
})
