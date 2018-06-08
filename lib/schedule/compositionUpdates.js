const schedule = require('node-schedule')

const { updateComposition } = require('../composition')

function scheduleCompositionUpdates (cb) {
  // Run right away the first time
  updateComposition().then(cb)

  let recurrence = new schedule.RecurrenceRule()
  recurrence.minute = 0 // Run every minute = 0 (i.e.: every hour)

  schedule.scheduleJob(recurrence, updateComposition)
}

module.exports = scheduleCompositionUpdates
