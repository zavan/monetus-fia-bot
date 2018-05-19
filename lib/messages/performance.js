const { formatDelta } = require('../utils')

const performance = portfolioPerformance =>
  '*Performance da carteira*: ' + formatDelta(portfolioPerformance.delta)

module.exports = performance
