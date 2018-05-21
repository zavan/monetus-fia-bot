const { generateAssetDetailedPerformanceMarkdown } = require('../utils')
const performance = require('./performance')

const detailedPerformance = portfolioPerformance => {
  const assetsPerformance = portfolioPerformance.assets
    .map(generateAssetDetailedPerformanceMarkdown)
    .join('\n\n')

  return [
    '*Performance do Monetus FIA*',
    assetsPerformance,
    performance(portfolioPerformance)
  ].join('\n\n')
}

module.exports = detailedPerformance
