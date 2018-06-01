const yahooFinance = require('yahoo-finance')
const { round } = require('./utils')

// TODO: Quote cache
function fetchQuote (ticker) {
  return new Promise((resolve, reject) => {
    yahooFinance.quote({
      symbol: `${ticker}.SA`,
      modules: ['price']
    }).then(({ price }) => {
      let q = {
        ticker: ticker,
        previousClose: round(price.regularMarketPreviousClose),
        open: round(price.regularMarketOpen),
        high: round(price.regularMarketDayHigh),
        price: round(price.regularMarketPrice),
        low: round(price.regularMarketDayLow),
        volume: round(price.regularMarketVolume)
      }

      q.delta = round((q.price - q.previousClose) / q.previousClose * 100)

      resolve(q)
    }).catch(err => {
      console.error(err)
      reject(err)
    })
  })
}

function fetchQuotes (tickers) {
  return Promise.all(tickers.map(fetchQuote))
}

module.exports = { fetchQuote, fetchQuotes }
