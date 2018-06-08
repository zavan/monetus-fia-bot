const { Readable } = require('stream')
const WKHtmlToX = require('wkhtmltox')

const htmlToImage = (html, width = 420) => {
  const converter = new WKHtmlToX()

  const stream = new Readable()
  stream._read = () => {}
  stream.push(html)
  stream.push(null)

  return converter.image(stream, { format: 'png', width: width, quality: 50 })
}

module.exports = htmlToImage
