const { createCanvas } = require('canvas')
const measureCanvasText = require('./measureCanvasText')

const generateAsciiTableImageBuffer = text => {
  const config = {
    fontFamily: 'Ubuntu Mono',
    fontSize: '20px',
    padding: 20
  }

  const { width, height } = measureCanvasText(text, config.fontFamily, config.fontSize)

  const canvas = createCanvas(width + config.padding, height + config.padding * 2)
  const context = canvas.getContext('2d')

  // Create white background
  context.fillStyle = 'white'
  context.fillRect(0, 0, canvas.width, canvas.height)

  // Create text
  context.fillStyle = 'black'
  context.font = `${config.fontSize} "${config.fontFamily}"`
  context.fillText(text, Math.floor(config.padding / 2), config.padding)

  return canvas.toBuffer()
}

module.exports = generateAsciiTableImageBuffer
