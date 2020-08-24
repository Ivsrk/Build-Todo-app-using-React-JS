import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

function todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary='todo' secondary={props.text}/>
                </ListItem>
            </List>

            
        </div>
    )
}

export default todo
