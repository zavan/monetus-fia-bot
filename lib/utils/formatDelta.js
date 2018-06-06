const formatDelta = delta => delta > 0
  ? `+${delta.toFixed(2)}%`
  : `${delta.toFixed(2)}%`

module.exports = formatDelta
