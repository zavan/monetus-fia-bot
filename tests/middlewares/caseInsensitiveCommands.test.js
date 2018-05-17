const caseInsensitiveCommands = require('../../lib/middlewares/caseInsensitiveCommands')

test('middlewares.caseInsensitiveCommands', () => {
  const ctx = Object.freeze({
    message: {
      text: 'Q NATU3'
    }
  })

  const expected = {
    message: {
      text: 'q natu3'
    }
  }

  return caseInsensitiveCommands(ctx, Promise.resolve.bind(Promise))
    .then(ctx => expect(ctx).toEqual(expected))
})
