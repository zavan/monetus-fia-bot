const axios = require('axios')

const { db } = require('./db')

// To use this you need to be a Monetus customer to get the required cookie for this request.
// Check .env.example
// HACK: This is unstable as it's based on a private API that may change at any time.
function fetchComposition () {
  return new Promise((resolve, reject) => {
    axios.get(
      'https://monetus.com.br/api/monetus-fia/composition',
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Cookie': process.env.MONETUS_COOKIE
        }
      }
    ).then(response => {
      if (response.status === 200) {
        const data = response.data.map(asset => {
          const parts = asset.name.split(' (')
          const name = parts[0].trim()
          const ticker = parts[1].trim().slice(0, -1)

          return {
            id: parseInt(asset.id),
            stockId: parseInt(asset.stock_id),
            ticker: ticker,
            name: name,
            description: asset.description.trim(),
            allocation: parseInt(parseFloat(asset.percentage) * 100),
            createdAt: new Date(asset.created_at),
            updatedAt: new Date(asset.updated_at),
            deletedAt: typeof asset.deleted_at === 'string' ? new Date(asset.deleted_at) : null
          }
        })

        resolve(data)
      } else {
        let err = new Error('Error fetching composition')
        err.response = response

        reject(err)
      }
    }).catch(reject)
  })
}

function getComposition (includeDeleted) {
  let sql

  if (includeDeleted) {
    sql = 'SELECT * FROM composition ORDER BY allocation DESC;'
  } else {
    sql = 'SELECT * FROM composition WHERE deletedAt IS NULL ORDER BY allocation DESC;'
  }

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(sql, [], function (err, rows) {
        if (err) return reject(err)
        resolve(rows)
      })
    })
  })
}

// TODO: Refactor this monstrosity when we implement composition change notifications.
function updateComposition () {
  console.info('Updating composition...')

  return new Promise((resolve, reject) => {
    fetchComposition().then(newAssets => {
      getComposition(true).then(currentAssets => {
        newAssets.forEach(asset => {
          if (currentAssets.find(a => (a.id === asset.id && a.stockId === asset.stockId))) {
            console.info(`Updating asset ${asset.ticker} (${asset.id}, ${asset.stockId})...`)

            db.serialize(() => {
              db.run(
                `
                  UPDATE composition SET
                    ticker = ?,
                    name = ?,
                    description = ?,
                    allocation = ?,
                    createdAt = ?,
                    updatedAt = ?,
                    deletedAt = ?
                  WHERE id = ? AND stockId = ?
                `,
                [
                  asset.ticker,
                  asset.name,
                  asset.description,
                  asset.allocation,
                  asset.createdAt.toISOString(),
                  asset.updatedAt.toISOString(),
                  asset.deletedAt ? asset.deletedAt.toISOString() : null,
                  asset.id,
                  asset.stockId
                ],
                function (err) {
                  if (err) console.error(err)
                }
              )
            })
          } else {
            console.info(`Creating asset ${asset.ticker} (${asset.id}, ${asset.stockId})...`)

            db.serialize(() => {
              db.run(
                `
                  INSERT INTO composition(
                    id,
                    stockId,
                    ticker,
                    name,
                    description,
                    allocation,
                    createdAt,
                    updatedAt,
                    deletedAt
                  ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
                `,
                [
                  asset.id,
                  asset.stockId,
                  asset.ticker,
                  asset.name,
                  asset.description,
                  asset.allocation,
                  asset.createdAt.toISOString(),
                  asset.updatedAt.toISOString(),
                  asset.deletedAt ? asset.deletedAt.toISOString() : null
                ],
                function (err) {
                  if (err) console.error(err)
                  // this.lastID
                }
              )
            })
          }

          resolve(true)
        })
      })
    }).catch(console.error)
  })
}

function getAsset (ticker, includeDeleted) {
  let sql

  if (includeDeleted) {
    sql = 'SELECT * FROM composition WHERE ticker = ? LIMIT 1;'
  } else {
    sql = 'SELECT * FROM composition WHERE ticker = ? AND deletedAt IS NULL LIMIT 1;'
  }

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.get(
        sql, [ticker.toString()],
        function (err, row) {
          if (err) return reject(err)
          resolve(row)
        }
      )
    })
  })
}

module.exports = {
  getComposition,
  getAsset,
  updateComposition
}
