const normalHoursPerformance = require('../../lib/messages/normalHoursPerformance')

test('messages.normalHoursPerformance', () => {
  const portfolioPerformance = {
    delta: 0.18,
    assets: [
      {
        ticker: 'LEET1',
        name: '1337',
        allocation: 1337,
        quote: {
          delta: 0.13
        }
      },
      {
        ticker: 'OCTO3',
        name: 'Octocat',
        allocation: 1547,
        quote: {
          delta: 0.05
        }
      }
    ]
  }

  expect(normalHoursPerformance(portfolioPerformance))
    .toEqual(`*Mercado fechado!*\n\n*Performance da carteira*: +0.18%`)
})
