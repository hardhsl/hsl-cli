import React from 'react';
import { Status } from './ui'



interface StatusProps {
    color: string,
    name: string
}

const StatusDrop: React.ComponentType<StatusProps> = (props: StatusProps) => {
    return (<Status type={props.color}>
            <small></small>
            {props.name}
        </Status>)
} 
export {
    StatusDrop
}