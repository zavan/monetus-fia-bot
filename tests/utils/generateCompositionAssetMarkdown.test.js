const generateCompositionAssetMarkdown = require('../../lib/utils/generateCompositionAssetMarkdown')

test('utils.generateCompositionAssetMarkdown', () => {
  const asset = {
    ticker: 'LEET1',
    name: '1337',
    allocation: 1337
  }

  expect(generateCompositionAssetMarkdown(asset))
    .toEqual('*LEET1 (1337):* 13.37%')
})
