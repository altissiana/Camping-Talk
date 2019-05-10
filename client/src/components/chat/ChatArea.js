import React, { useState, useContext, useRef, useEffect } from "react"
import { AuthContext } from "../../lib/auth"
import { sendMessage } from "../../actions/chat"
import { useSelector } from "react-redux"
import moment from "moment"

const ChatArea = props => {
    const [text, setText] = useState("")
    const { user } = useContext(AuthContext)
    const messages = useSelector(appstate => {
        return appstate.chatReducer.messages.map(message => ({
            ...message,
            timestamp: moment(message.timestamp).fromNow()
        }))
    })
    const chatBottom = useRef(null)

    useEffect(() => {
        chatBottom.current.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    function handleSubmit(e) {
        e.preventDefault()
        sendMessage({ user, text, timestamp: new Date() })
        setText("")
    }

    return (
        <div className="chatArea">
            <div className="messages">
                {messages.map((message, i) => (
                    <p key={"message" + i}>
                        <span className="messageName">{message.user}</span>
                        <span className="messageColon">:</span>
                        <span className="messageText">{message.text}</span>
                        <span className="messageTimestamp">{message.timestamp}</span>
                    </p>
                ))}
                <div ref={chatBottom} />
            </div>
            <div className="inputArea">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="theinput"
                        onChange={e => setText(e.target.value)}
                        placeholder="Message room..."
                        value={text}
                    />
                </form>
            </div>
        </div>
    )
}

export default ChatArea