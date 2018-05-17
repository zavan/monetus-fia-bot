const caseInsensitiveCommands = async (ctx, next) => {
  const ctxCopy = Object.assign({}, ctx)
  const { message: { text } } = ctx

  if (text) {
    ctxCopy.message.text = text.toLowerCase()
  }

  return next(ctxCopy)
}

module.exports = caseInsensitiveCommands
