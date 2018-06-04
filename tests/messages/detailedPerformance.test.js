const detailedPerformance = require('../../lib/messages/detailedPerformance')

test('messages.detailedPerformance', () => {
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

  expect(detailedPerformance(portfolioPerformance)).toEqual('*Performance da carteira*: +0.18%')
})
