import io from "socket.io-client"
import store from "../store"

let socket = null

export function connect(user) {
    socket = io.connect("http://localhost:3001")

    socket.emit("join", user)

    socket.on("new message", message => {
        addMessage(message)
    })

    socket.on("user list", users => {
        listUsers(users)
    })
}

export function sendMessage(message) {
    socket.emit("new message", message)
}

export function addMessage(message) {
    store.dispatch({
        type: "ADD_MESSAGE",
        payload: message
    })
}

export function listUsers(users) {
    store.dispatch({
        type: "LIST_USERS",
        payload: users
    })
}