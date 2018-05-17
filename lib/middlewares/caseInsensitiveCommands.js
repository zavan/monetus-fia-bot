const caseInsensitiveCommands = (ctx, next) => {
  const { message: { text } } = ctx

  if (text) {
    ctx.message.text = text.toLowerCase()
  }

  return next(ctx)
}

module.exports = caseInsensitiveCommands
