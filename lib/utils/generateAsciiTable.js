const { formatDelta } = require('../utils')
const { table, getBorderCharacters } = require('table')

const generateAsciiTable = (assets, options = { delta: true }) => {
  const header = ['Ticker', 'Asset', '%'].concat(options.delta ? 'Δ' : [])
  const footer = ['TOTAL', null, '100%'].concat(options.delta
    ? formatDelta(assets.reduce((acc, { delta }) => acc + delta, 0))
    : [])

  const content = assets.map(asset => [
    asset.ticker,
    asset.name,
    `${(asset.allocation / 100).toFixed(2)}%`
  ].concat(options.delta ? formatDelta(asset.delta) : []))

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
