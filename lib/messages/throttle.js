const { formatTimeLeft } = require('../utils')

const throttle = secondsLeft =>
  `Comando executado recentemente, por favor, aguarde ${formatTimeLeft(secondsLeft)} minutos e tente novamente.`

module.exports = throttle
