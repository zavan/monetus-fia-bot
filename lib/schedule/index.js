const scheduleCompositionUpdates = require('./compositionUpdates')
const scheduleQuoteUpdates = require('./quoteUpdates')
const scheduleNotifications = require('./notifications')

function schedule (telegram) {
  // Quotes can only be updated after composition update is done first time
  scheduleCompositionUpdates(scheduleQuoteUpdates)

  scheduleNotifications(telegram)
}

module.exports = schedule
