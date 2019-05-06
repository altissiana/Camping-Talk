import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import Messages from './Messages'
import Login from './Login'



const Chat = (props) => {
    return (
        <div>
            {
                props.username
                    ?
                    <div>
                        <Form />
                        <Messages />
                    </div>
                    :
                    <Login />
            }

        </div>
    )
}

function mapStateToProps(appState) {
    return {
        username: appState.username

    }

}


export default connect(mapStateToProps)(Chat)