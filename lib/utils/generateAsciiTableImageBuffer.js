const { createCanvas } = require('canvas')
const measureCanvasText = require('./measureCanvasText')

const generateAsciiTableImageBuffer = text =>
  new Promise((resolve, reject) => {
    const config = {
      fontFamily: 'Fira Code',
      fontSize: '20px',
      padding: {
        top: 20,
        right: 20
      }
    }

    const { width, height } = measureCanvasText(text, config.fontFamily, config.fontSize)

    const canvasWidth = width + config.padding.right
    const canvasHeight = height + config.padding.top
    const canvas = createCanvas(canvasWidth, canvasHeight)

    const context = canvas.getContext('2d')

    // Create white background
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)

    // Create text
    context.fillStyle = 'black'
    context.font = `${config.fontSize} "${config.fontFamily}"`
    context.fillText(text, Math.floor(config.padding.right / 2), config.padding.top)

    canvas.toDataURL(
      'image/jpeg',
      { quality: 80, progressive: true },
      (err, jpeg) => {
        if (err) {
          return reject(err)
        }

        const normalizedJpeg = jpeg.replace('data:image/jpeg;base64,', '')

        resolve(Buffer.from(normalizedJpeg, 'base64'))
      }
    )
  })

module.exports = generateAsciiTableImageBuffer
