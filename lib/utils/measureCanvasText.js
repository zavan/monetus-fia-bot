const { createCanvas } = require('canvas')

const measureCanvasText = (text, fontFamily, fontSize) => {
  const canvas = createCanvas(1000, 1000)
  const context = canvas.getContext('2d')
  context.font = `${fontSize} "${fontFamily}"`

  const { width, emHeightAscent } = context.measureText(text)
  const numberOfLines = text.split('\n').length
  const height = emHeightAscent * numberOfLines

  return {
    width,
    height,
    numberOfLines
  }
}

module.exports = measureCanvasText
