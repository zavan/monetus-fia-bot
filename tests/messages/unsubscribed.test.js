const unsubscribed = require('../../lib/messages/unsubscribed')

test('messages.unsubscribed', () => {
  expect(unsubscribed()).toEqual('Inscrição removida com sucesso! Você não receberá mais notificações diárias.')
})
