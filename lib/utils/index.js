const formatDelta = require('./formatDelta')
const formatTimeLeft = require('./formatTimeLeft')
const generateHtmlTable = require('./generateHtmlTable')
const htmlToImage = require('./htmlToImage')
const generateCompositionAssetMarkdown = require('./generateCompositionAssetMarkdown')
const parseCommand = require('./parseCommand')
const round = require('./round')

// TODO: Persist this on db
let lastCommands = {}
const min = 600000 // 10 minutes in milliseconds

function throttle (message, ignoreArgs) {
  // Don't throttle private messages, only groups/supergroups
  if (message.chat.type === 'private') return false

  const c = parseCommand(message.text)

  let k = message.chat.id.toString() + c.command
  if (!ignoreArgs) k += c.args

  const last = lastCommands[k]
  const time = Date.now()

  if (last) {
    const timeAgo = time - last

    if (timeAgo < min) {
      const left = ((min - timeAgo) / 1000)
      return left
    }
  }

  lastCommands[k] = time
  return false
}

module.exports = {
  formatDelta,
  formatTimeLeft,
  generateHtmlTable,
  htmlToImage,
  generateCompositionAssetMarkdown,
  parseCommand,
  round,
  throttle
}
