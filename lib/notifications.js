const chunk = require('lodash.chunk')

const { getAllSubscribed } = require('./subscriptions')
const { getPerformance } = require('./performance')

function broadcastNotifications (telegram, messageBuilder) {
  getPerformance().then(performance => {
    const message = messageBuilder(performance)

    getAllSubscribed().then(chatIds => {
      chunk(chatIds, 30).forEach((ids, i) => { // Telegram limits to 30 msg/s
        ((i, ids) => { // Wait 1.5 seconds between each chunk
          setTimeout(() => { // This makes me hate JS so much
            ids.forEach(id => {
              telegram.sendMessage(id, message, { parse_mode: 'Markdown' })
            })
          }, 1500 * i)
        })(i, ids)
      })
    }).catch(err => console.error(err))
  }).catch(err => console.error(err))
}

module.exports = {
  broadcastNotifications
}
