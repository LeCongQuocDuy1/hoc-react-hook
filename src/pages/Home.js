import { React, useContext } from 'react'
import { AppContext } from '../App'

export const Home = () => {
    const { username } = useContext(AppContext)

    return (
        <>
            <h1>Home page</h1>
            <p>I'm {username}</p>
        </>
    )
}