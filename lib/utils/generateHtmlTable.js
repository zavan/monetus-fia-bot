const formatDelta = require('./formatDelta')

const deltaClass = (delta) => {
  if (delta > 0) {
    return 'positive'
  } else if (delta < 0) {
    return 'negative'
  } else {
    return 'zero'
  }
}

// TODO: Extract the code that generate each part of the table to make it testable
const generateHtmlTable = ({ assets, delta }, options = { delta: true }) => {
  const header = `
    <thead>
      <tr>
        <th>Ticker</th>
        <th>Nome</th>
        <th>%</th>
        ${(options.delta ? '<th>Δ</th>' : '')}
      </tr>
    </thead>
  `

  const footer = `
    <tfoot>
      <tr>
        <td>TOTAL</td>
        <td></td>
        <td class="right">100%</td>
        ${(options.delta ? `<td class="right ${deltaClass(delta)}">${formatDelta(delta)}</td>` : '')}
      </tr>
    </tfoot>
  `

  let content = ''

  assets.forEach(asset => {
    content += `
      <tr>
        <td>${asset.ticker}</td>
        <td>${asset.name}</td>
        <td class="right">${(asset.allocation / 100).toFixed(2)}%</td>
        ${(options.delta ? `<td class="right ${deltaClass(asset.quote.delta)}">${formatDelta(asset.quote.delta)}</td>` : '')}
      </tr>
    `
  })

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">

        <style>
          body {
            width: 400px;
          }

          table {
            width: 100%;
            padding: 10px;
            border-collapse: collapse;
            border: 1px solid black;
            font-family: FiraCode, monospace;
            font-size: 16px;
          }

          td, th {
            padding: 6px;
          }

          thead tr {
            border-bottom: 1px solid black;
          }

          thead th {
            text-align: center;
          }

          tfoot tr {
            border-top: 1px solid black;
            font-weight: bold;
          }

          .right {
            text-align: right;
          }

          .zero {
            color: blue;
          }

          .positive {
            color: green;
          }

          .negative {
            color: red;
          }
        </style>
      </head>
      <body>
        <table>
          ${header}
          <tbody>${content}</tbody>
          ${footer}
        </table>
      </body>
    </html>
  `
}

module.exports = generateHtmlTable
