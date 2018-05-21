const generateCompositionAssetMarkdown = asset =>
  `*${asset.ticker} (${asset.name}):* ${asset.allocation / 100}%`

module.exports = generateCompositionAssetMarkdown
