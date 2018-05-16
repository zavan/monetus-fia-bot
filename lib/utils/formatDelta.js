const formatDelta = delta => delta > 0
  ? `+${delta}%`
  : `${delta}%`

module.exports = formatDelta
