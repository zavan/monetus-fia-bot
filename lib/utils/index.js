const formatDelta = require('./formatDelta')
const formatTimeLeft = require('./formatTimeLeft')
const round = require('./round')

function parseCommand (text) {
  const parts = text.split(' ')

  const command = parts[0].toLowerCase().trim()

  let args = ''
  if (parts[1]) args = parts[1].toString().toUpperCase().trim()

  return { command, args }
}

// TODO: Persist this on db
let lastCommands = {}
const min = 300000 // 5 minutes in milliseconds

function throttle (message, ignoreArgs) {
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
  parseCommand,
  formatTimeLeft,
  throttle,
  round
}
