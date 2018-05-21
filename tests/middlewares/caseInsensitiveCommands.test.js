const caseInsensitiveCommands = require('../../lib/middlewares/caseInsensitiveCommands')

test('middlewares.caseInsensitiveCommands: non-empty text', () => {
  const ctx = {
    message: {
      text: 'Q NATU3'
    }
  }

  const expected = {
    message: {
      text: 'q natu3'
    }
  }

  return caseInsensitiveCommands(ctx, Promise.resolve.bind(Promise))
    .then(context => expect(context).toEqual(expected))
})

test('middlewares.caseInsensitiveCommands: empty text', () => {
  const ctx = {
    message: {
      text: ''
    }
  }

  const expected = {
    message: {
      text: ''
    }
  }

  return caseInsensitiveCommands(ctx, Promise.resolve.bind(Promise))
    .then(context => expect(context).toEqual(expected))
})
