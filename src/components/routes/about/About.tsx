import React from 'react'
import { IRoute } from '../../ui/header/Header'

interface IProps {
    // value: number,
    setValue: (value: number) => void,
    // selectedIndex: number,
    setSelectedIndex: (value: number) => void,
    // routes: IRoute[],
    // anchorEl?: HTMLElement,
    // openMenu: boolean,
    // menuOptions: IMenuOption[],
    // handleClose: () => void,
    // handleMenuItemClick:  (e: MouseEvent, i: number) => void,
    // handleChange: () => any
}


export default function About(props: IProps) {
    return (
        <div>
            About
        </div>
    )
}
