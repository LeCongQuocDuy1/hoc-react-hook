import { React, useState, useContext } from 'react'
import { AppContext } from '../App'

export const ChangeMenu = () => {
    const { setUsername } = useContext(AppContext);
    const [newUsername, setNewUsername] = useState("");

    return (
        <>
            <input type="text" onChange={(e) => setNewUsername(e.target.value)} />
            <br />
            <button onClick={() => {
                setUsername(newUsername);
            }}>Change Username</button>
        </>
    )
}