const performance = require('./performance')

const afterMarketPerformance = portfolioPerformance =>
  '*After-Market fechado!*\n\n' + performance(portfolioPerformance)

module.exports = afterMarketPerformance
