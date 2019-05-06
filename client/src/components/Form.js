import React, { useState } from 'react'
import { send, setIsTyping } from '../actions/actions'
import { connect } from 'react-redux'


const Form = props => {
    const [text, setText] = useState('')

    function sendMessage(e) {
        e.preventDefault()
        send(text)
        setText('')
    }

    function handleChange(e) {
        setText(e.target.value)
        setIsTyping(true)
        setTimeout(() => {
            setIsTyping(false)
        }, 1000)

    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <input
                    id="text-box"
                    type='text'
                    name='message'
                    placeholder='Type here...'
                    onChange={handleChange}
                    value={text}
                />
                <button id="txbt" type="submit">Send</button>
                <span>{props.isTyping ? "Someone is typing" : ""}</span>
                {props.users.map(user => (
                    <span style={{ paddingRight: 20 }}>{user.username}</span>
                ))}
            </form>
        </div>
    )
}

function mapStateToProps(appState) {
    return {
        isTyping: appState.isTyping,
        users: appState.users
    }

}

export default connect(mapStateToProps)(Form)