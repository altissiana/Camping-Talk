import React, { useContext } from "react"
import { useSelector } from "react-redux"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { AuthContext } from "../../lib/auth"
import Button from "@material-ui/core/Button"

const UserList = props => {
    const users = useSelector(appstate => appstate.chatReducer.users)
    const { signout } = useContext(AuthContext)

    return (
        <div className="userList">
            <div className="signout">
                <Button variant="contained" color="secondary" onClick={signout}>
                    Sign Out
        </Button>
            </div>
            <div className="users">
                <List>
                    {users.map((user, i) => (
                        <ListItem key={"user" + i}>
                            <ListItemText primary={user.user} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    )
}

export default UserList