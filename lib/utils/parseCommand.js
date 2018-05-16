const parseCommand = text => {
  const [command, arg] = text.split(' ')

  return {
    command: command.toLowerCase().trim(),
    args: arg ? arg.toUpperCase().trim() : ''
  }
}

module.exports = parseCommand
