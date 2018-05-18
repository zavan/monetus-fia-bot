const composition = require('../../lib/messages/composition')

test('messages.composition', () => {
  const assets = [
    {
      ticker: 'OCTO3',
      name: 'Octocat',
      allocation: 1547
    },
    {
      ticker: 'LEET1',
      name: '1337',
      allocation: 1337
    }
  ]

  expect(composition(assets)).toEqual(`*Composição do Monetus FIA*

*OCTO3 (Octocat):* 15.47%

*LEET1 (1337):* 13.37%`)
})
