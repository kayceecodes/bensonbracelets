import React from 'react'
import { ICartItems } from '../../../../Interfaces'


export default function Cartcard(props: ICartItems) {
    
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}
