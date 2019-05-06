const users = require('./users')


const initSocket = function (io) {
  io.on("connection", socket => {
    users(io, socket)

    socket.on('new message', msg => {
      io.emit('new message', msg)
    })

    socket.on('IsTyping', isTyping => {
      io.emit('isTyping', isTyping)
    })
  })
}

module.exports = initSocket
