const generateAsciiTableImageBuffer = require('../../lib/utils/generateAsciiTableImageBuffer')

test('utils.generateAsciiTableImageBuffer', () => {
  const text = `┌────────┬───────────────┬────────┬────────┐
│ Ticker │ Asset         │      % │      Δ │
├────────┼───────────────┼────────┼────────┤
│ LEET1  │ 1337! Corp.   │ 50.10% │ +0.13% │
│ OCTO3  │ Octocat Corp. │ 49.90% │ -0.05% │
├────────┼───────────────┼────────┼────────┤
│ TOTAL  │               │   100% │ +0.08% │
└────────┴───────────────┴────────┴────────┘`

  return generateAsciiTableImageBuffer(text)
    .then(imageBuffer => expect(imageBuffer).toMatchSnapshot())
})
