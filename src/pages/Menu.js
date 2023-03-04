import { React, useContext } from 'react'
import { AppContext } from '../App'
import { ChangeMenu } from '../components/ChangeMenu'

export const Menu = () => {
    const { username } = useContext(AppContext)

    return (
        <div>
            <h1>Menu page</h1>
            <p>{username}</p>
            <ChangeMenu />
        </div>
    )
}