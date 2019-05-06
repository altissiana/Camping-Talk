import io from 'socket.io-client'
import store from '../store'

const socket = io.connect('http://10.68.0.253:3001')
console.log(socket)

export function send(text) {
    const username = store.getState().username
    socket.emit('new message', {
        text: text,
        username: username
    })
}

export function createUsername(username) {
    socket.emit('set username', username)
    store.dispatch({
        type: 'SET_USERNAME',
        payload: username
    })
}

export function setIsTyping(isTyping) {
    socket.emit("isTyping", isTyping)
}

socket.on('list users', users => {
    store.dispatch({
        type: 'LIST_USERS',
        payload: users
    })
})

socket.on('new message', message => {
    store.dispatch({
        type: 'ADD_MESSAGE',
        payload: message
    })
})

socket.on('isTyping', isTyping => {
    store.dispatch({
        type: 'TOGGLE_TYPING',
        payload: isTyping
    })
})