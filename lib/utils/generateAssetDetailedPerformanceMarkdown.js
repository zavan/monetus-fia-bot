const formatDelta = require('./formatDelta')

const generateAssetDetailedPerformanceMarkdown = asset =>
  `*${asset.ticker} (${asset.name})*
_Alocação_: ${asset.allocation / 100}%
_Variação_: ${formatDelta(asset.quote.delta)}`

module.exports = generateAssetDetailedPerformanceMarkdown
