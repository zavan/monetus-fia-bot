const assetNotFound = require('../../lib/messages/assetNotFound')

test('messages.assetNotFound: with non empty ticker', () => {
  expect(assetNotFound('LEET1')).toEqual(`Ativo "LEET1" não encontrado na carteira.`)
})

test('messages.assetNotFound: with empty ticker', () => {
  expect(assetNotFound('')).toEqual(`Especifique um ativo.`)
})
