const notSubscribed = require('../../lib/messages/notSubscribed')

test('messages.notSubscribed', () => {
  expect(notSubscribed()).toEqual('Você não está inscrito para receber notificações.')
})
