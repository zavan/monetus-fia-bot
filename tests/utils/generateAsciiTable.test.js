const generateAsciiTable = require('../../lib/utils/generateAsciiTable')

const assets = [
  {
    ticker: 'LEET1',
    name: '1337! Corp.',
    allocation: 5010,
    delta: 0.13
  },
  {
    ticker: 'OCTO3',
    name: 'Octocat Corp.',
    allocation: 4990,
    delta: -0.05
  }
]

test('utils.generateAsciiTable: with delta', () => {
  expect(generateAsciiTable(assets)).toEqual(`┌────────┬───────────────┬────────┬────────┐
│ Ticker │ Asset         │      % │      Δ │
├────────┼───────────────┼────────┼────────┤
│ LEET1  │ 1337! Corp.   │ 50.10% │ +0.13% │
│ OCTO3  │ Octocat Corp. │ 49.90% │ -0.05% │
├────────┼───────────────┼────────┼────────┤
│ TOTAL  │               │   100% │ +0.08% │
└────────┴───────────────┴────────┴────────┘`)
})

test('utils. generateAsciiTable: without delta', () => {
  expect(generateAsciiTable(assets, { delta: false })).toEqual(`┌────────┬───────────────┬────────┐
│ Ticker │ Asset         │      % │
├────────┼───────────────┼────────┤
│ LEET1  │ 1337! Corp.   │ 50.10% │
│ OCTO3  │ Octocat Corp. │ 49.90% │
├────────┼───────────────┼────────┤
│ TOTAL  │               │   100% │
└────────┴───────────────┴────────┘`)
})
