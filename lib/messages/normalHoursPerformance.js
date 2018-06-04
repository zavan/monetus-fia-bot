const performance = require('./performance')

const normalHoursPerformance = portfolioPerformance =>
  '*Mercado fechado!*\n\n' + performance(portfolioPerformance)

module.exports = normalHoursPerformance
