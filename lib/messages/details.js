const details = asset =>
  `*${asset.ticker} (${asset.name})*

_Alocação_: ${asset.allocation / 100}%

_Descrição_: ${asset.description}`

module.exports = details
