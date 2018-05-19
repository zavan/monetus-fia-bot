const detailedPerformance = require('./detailedPerformance')

const afterMarketPerformance = portfolioPerformance =>
  '*After-Market fechado!*\n\n' + detailedPerformance(portfolioPerformance)

module.exports = afterMarketPerformance
