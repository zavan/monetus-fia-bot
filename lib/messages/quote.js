const { formatDelta } = require('../utils')

const quote = (asset, quote) =>
  `*${asset.ticker} (${asset.name})*

\`\`\`
Variação:   ${formatDelta(quote.delta)}
Anterior:   ${quote.previousClose}
Abertura:   ${quote.open}
Alta:       ${quote.high}
Preço:      ${quote.price}
Baixa:      ${quote.low}
Volume:     ${quote.volume}
\`\`\``

module.exports = quote
