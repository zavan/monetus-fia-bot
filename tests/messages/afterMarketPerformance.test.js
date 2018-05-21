const afterMarketPerformance = require('../../lib/messages/afterMarketPerformance')

test('messages.afterMarketPerformance', () => {
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

  expect(afterMarketPerformance(portfolioPerformance))
    .toEqual(`*After-Market fechado!*

*Performance do Monetus FIA*

*LEET1 (1337)*
_Alocação_: 13.37%
_Variação_: +0.13%

*OCTO3 (Octocat)*
_Alocação_: 15.47%
_Variação_: +0.05%

*Performance da carteira*: +0.18%`)
})
