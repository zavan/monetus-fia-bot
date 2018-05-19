const subscribed = require('../../lib/messages/subscribed')

test('messages.subscribed', () => {
  expect(subscribed()).toEqual('Inscrito com sucesso! Você receberá notificações diárias.')
})
