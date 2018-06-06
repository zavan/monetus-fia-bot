const { createCanvas } = require('canvas')
const uniqueChars = require('./uniqueChars')

const measureCanvasText = (text, fontFamily, fontSize) => {
  const canvas = createCanvas(0, 0)
  const context = canvas.getContext('2d')
  context.font = `${fontSize} "${fontFamily}"`

  const { width } = context.measureText(text)
  const {
    actualBoundingBoxDescent,
    emHeightDescent
  } = context.measureText(uniqueChars(text).join(''))

  const parsedFontSize = parseInt(fontSize, 10)
  const charSize = parsedFontSize + (actualBoundingBoxDescent - emHeightDescent)

  const numberOfLines = text.split('\n').length
  const height = Math.floor(numberOfLines * charSize)

  return {
    width,
    height,
    numberOfLines
  }
}

module.exports = measureCanvasText
