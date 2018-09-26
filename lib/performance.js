const fs = require('fs')

const { getComposition } = require('./composition')
const { getQuotes, fetchQuote } = require('./quotes')
const {
  generateHtmlTable,
  htmlToImage,
  round
} = require('./utils')

function getPerformance () {
  let performance = {
    assets: [],
    benchmark: {}
  }

  return new Promise((resolve, reject) => {
    getComposition().then(composition => {
      const tickers = composition.map(asset => asset.ticker)

      getQuotes(tickers).then(quotes => {
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

function updatePerformanceImage () {
  console.log('Updating performance image...')

  return new Promise((resolve, reject) => {
    getPerformance().then(performance => {
      // TODO: Save to DB
      fetchQuote('^BVSP').then(b => {
        b.delta = round((b.price - b.previousClose) / b.previousClose * 100)
        performance.benchmark = b

        htmlToImage(generateHtmlTable(performance))
          .pipe(fs.createWriteStream('images/performance.png'))
          .on('finish', resolve)
          .on('error', reject)
      })
    })
  })
}

function getPerformanceImage () {
  return fs.createReadStream('images/performance.png')
}

module.exports = {
  getPerformance,
  updatePerformanceImage,
  getPerformanceImage
}
