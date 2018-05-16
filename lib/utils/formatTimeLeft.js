const secondsToMinutes = require('./secondsToMinutes')
const secondsToMinuteRange = require('./secondsToMinuteRange')

const formatTimeLeft = seconds => {
  const minutes = secondsToMinutes(seconds)
  const secondsInMinuteRange = secondsToMinuteRange(seconds)

  return `${('0' + minutes).slice(-2)}:${('0' + secondsInMinuteRange).slice(-2)}`
}

module.exports = formatTimeLeft
