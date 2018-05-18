const { generateCompositionAssetMarkdown } = require('../utils')

const composition = assets => {
  const assetsMarkdown =
    assets.map(generateCompositionAssetMarkdown)
      .join('\n\n')

  return '*Composição do Monetus FIA*\n\n' + assetsMarkdown
}

module.exports = composition
