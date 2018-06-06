const formatDelta = require('./formatDelta')
const { table, getBorderCharacters } = require('table')

const generateAsciiTable = ({ assets, delta }, options = { delta: true }) => {
  const header = ['Ticker', 'Asset', '%'].concat(options.delta ? 'Δ' : [])
  const footer = ['TOTAL', null, '100%'].concat(options.delta ? formatDelta(delta) : [])

  const content = assets.map(asset => [
    asset.ticker,
    asset.name,
    `${(asset.allocation / 100).toFixed(2)}%`
  ].concat(options.delta ? formatDelta(asset.quote.delta) : []))

  const tableContent = [header, ...content, footer]

  const tableConfig = {
    border: getBorderCharacters('norc'),
    drawHorizontalLine (index, size) {
      return index === 0 || index === 1 || index === size - 1 || index === size
    },
    columns: {
      2: {
        alignment: 'right'
      },
      3: {
        alignment: 'right'
      }
    }
  }

  return table(tableContent, tableConfig).trim()
}

module.exports = generateAsciiTable
