const performance = require('../../lib/messages/performance')

test('messages.performance', () => {
  const portfolioPerformance = {
    delta: 13.37
  }
  expect(performance(portfolioPerformance))
    .toEqual('*Performance da carteira*: +13.37%')
})
