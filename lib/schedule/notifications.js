const schedule = require('node-schedule')

const { broadcastNotifications } = require('../notifications')
const { normalHoursPerformance/*, afterMarketPerformance*/ } = require('../messages')
const { operationHours } = require('../stockExchange')

// About the hours: https://goo.gl/LbUqxz
function scheduleNotifications (telegram) {
  const workDays = new schedule.Range(1, 5) // Mon-Fri

  let normalHours = new schedule.RecurrenceRule()
  normalHours.dayOfWeek = workDays
  normalHours.hour = operationHours.marketCloseTime.hour
  normalHours.minute = operationHours.marketCloseTime.minute

  schedule.scheduleJob(normalHours, function () {
    broadcastNotifications(telegram, normalHoursPerformance)
  })

  /* No aftermarket on summer time
  let afterMarketHours = new schedule.RecurrenceRule()
  afterMarketHours.dayOfWeek = workDays
  afterMarketHours.hour = operationHours.afterMarketCloseTime.hour
  afterMarketHours.minute = operationHours.afterMarketCloseTime.minute

  schedule.scheduleJob(afterMarketHours, function () {
    broadcastNotifications(telegram, afterMarketPerformance)
  })
  */
}

module.exports = scheduleNotifications
