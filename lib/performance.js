const { getComposition } = require('./composition')
const { fetchQuotes } = require('./quotes')
const { round } = require('./utils')

function fetchPerformance () {
  let performance = {
    assets: []
  }

  return new Promise((resolve, reject) => {
    getComposition().then(composition => {
      const tickers = composition.map(asset => asset.ticker)

      fetchQuotes(tickers).then(quotes => {
        let weightedSum = 0

        composition.forEach(asset => {
          asset.quote = quotes.find(q => q.ticker === asset.ticker)
          weightedSum += asset.quote.delta * asset.allocation
          performance.assets.push(asset)
        })

        performance.delta = round(weightedSum / 10000)

        resolve(performance)
      })
    }).catch(reject)
  })
}

module.exports = {
  fetchPerformance
}
