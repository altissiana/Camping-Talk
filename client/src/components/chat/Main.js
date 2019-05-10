import React, { useEffect, useContext } from "react"
import { connect } from "../../actions/chat"
import ChannelList from "./ChannelList"
import ChatArea from "./ChatArea"
import UserList from "./UserList"
import { AuthContext } from "../../lib/auth"

const Main = props => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        connect(user)
    }, [user])

    return (
        <div className="room">
            <ChannelList />
            <ChatArea />
            <UserList />
        </div>
    )
}

export default Main