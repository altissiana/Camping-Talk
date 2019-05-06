let users = []

function username(io, socket) {
    socket.on('set username', username => {
        users.push({
            username,
            id: socket.id
        })

        io.emit('list users', users)
    })

    socket.on('disconnect', () => {
        users = users.filter(user => user.id !== socket.id)

        io.emit('list users', users)
    })

}

module.exports = username