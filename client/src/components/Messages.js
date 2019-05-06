import React from 'react'
import { connect } from 'react-redux'

const Messages = props => {
    return (
        <div>
            <ul id="msg">
                {props.messages.map((message, i) => (
                    <li key={"message" + i}>
                        {message.username} : {message.text}
                    </li>
                ))}
            </ul>
        </div >

    )

}

function mapStateToProps(appState) {
    return {
        messages: appState.messages,
        isTyping: appState.isTyping
    }
}

export default connect(mapStateToProps)(Messages)

