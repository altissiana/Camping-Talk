const io = require('socket.io')
const init = require('./chat/init')

io.once('connection', init)

module.exports = io

