import React, { useState } from 'react'
import { createUsername } from '../actions/actions'

export default props => {
    const [username, setUsername] = useState('')

    function sendUser(e) {
        e.preventDefault()
        createUsername(username)
    }


    return (
        <div id="container">
            <h1 id="title">Welcome, Campers!</h1>
            <p></p>
            <form onSubmit={sendUser}>
                <input
                    id="log"
                    type="text"
                    value={username}
                    placeholder="How should we call you?"
                    onChange={e => setUsername(e.target.value)}
                />
                <button id="bt" type="submit">Enter</button>
            </form>
        </div>
    )

}