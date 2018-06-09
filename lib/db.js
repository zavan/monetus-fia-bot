const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./db/monetus_fia_bot.db', (err) => {
  if (err) console.error(err.message)
})

// Setup tables
function setupDB () {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS subscriptions(
      chatId text NOT NULL UNIQUE
    )`)

    db.run(`CREATE TABLE IF NOT EXISTS composition(
      id integer,
      stockId integer,
      ticker text,
      name text,
      description text,
      allocation integer,
      createdAt text,
      updatedAt text,
      deletedAt text
    )`)

    db.run(`CREATE TABLE IF NOT EXISTS quotes(
      ticker text,
      previousClose integer,
      open integer,
      high integer,
      price integer,
      low integer,
      volume integer,
      requestTimestamp text
    )`)
  })

  // Properly close DB on process stop signal
  process.on('SIGINT', () => db.close())
}

module.exports = {
  db,
  setupDB
}
