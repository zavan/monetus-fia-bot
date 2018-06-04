const measureCanvasText = require('../../lib/utils/measureCanvasText')

test('utils.measureCanvasText', () => {
  const text = `┌────────┬───────────────┬────────┬────────┐
│ Ticker │ Asset         │      % │      Δ │
├────────┼───────────────┼────────┼────────┤
│ LEET1  │ 1337! Corp.   │ 50.10% │ +0.13% │
│ OCTO3  │ Octocat Corp. │ 49.90% │ -0.05% │
├────────┼───────────────┼────────┼────────┤
│ TOTAL  │               │   100% │ +0.08% │
└────────┴───────────────┴────────┴────────┘`

  const fontFamily = 'Fira Code'
  const fontSize = '20px'

  expect(measureCanvasText(text, fontFamily, fontSize)).toMatchSnapshot()
})
