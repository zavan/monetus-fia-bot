const start = require('../../lib/messages/start')

test('messages.start', () => {
  expect(start())
    .toEqual('Olá, bem-vindo ao Monetus FIA Tracker! Envie /help para ver a lista de comandos.')
})
