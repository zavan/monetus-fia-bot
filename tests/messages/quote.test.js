const quote = require('../../lib/messages/quote')

test('messages.quote', () => {
  const asset = {
    ticker: 'NATU3',
    name: 'Natura'
  }

  const assetQuote = {
    delta: -0.17,
    previousClose: 35.24,
    open: 34.98,
    high: 35.7,
    price: 35.18,
    low: 34.5,
    volume: 3014400
  }

  expect(quote(asset, assetQuote))
    .toEqual(`*NATU3 (Natura)*

\`\`\`
Variação:   -0.17%
Anterior:   35.24
Abertura:   34.98
Alta:       35.7
Preço:      35.18
Baixa:      34.5
Volume:     3014400
\`\`\``)
})
