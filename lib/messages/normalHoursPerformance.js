const detailedPerformance = require('./detailedPerformance')

const normalHoursPerformance = portfolioPerformance =>
  '*Mercado fechado!*\n\n' + detailedPerformance(portfolioPerformance)

module.exports = normalHoursPerformance
