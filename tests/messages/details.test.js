const details = require('../../lib/messages/details')

test('messages.details', () => {
  const asset = {
    ticker: 'LEET1',
    name: '1337',
    description: 'A elite.',
    allocation: 1337
  }

  expect(details(asset)).toEqual(`*LEET1 (1337)*

_Alocação_: 13.37%

_Descrição_: A elite.`)
})
