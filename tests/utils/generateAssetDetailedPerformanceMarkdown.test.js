const generateAssetDetailedPerformanceMarkdown = require('../../lib/utils/generateAssetDetailedPerformanceMarkdown')

test('utils.generateAssetDetailedPerformanceMarkdown', () => {
  const asset = {
    ticker: 'LEET1',
    name: '1337',
    allocation: 1337,
    quote: {
      delta: 0.13
    }
  }

  expect(generateAssetDetailedPerformanceMarkdown(asset))
    .toEqual(`*LEET1 (1337)*
_Alocação_: 13.37%
_Variação_: +0.13%`)
})
