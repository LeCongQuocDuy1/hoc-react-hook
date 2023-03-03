import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <>
            <div>Navigation</div>
            <br />

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/getapi">Get API</Link>
                </li>
                <li>
                    <Link to="/todo">To Do App</Link>
                </li>
            </ul>
        </>
    )
}