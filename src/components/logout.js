import React from 'react'
import { navigate } from "gatsby"
import Auth from '../utils/auth.js'

const auth = new Auth();

const LogOut = () => {
    {/*This component will Logout user and return them to landing page */}

    return (
        <button className="loginStyle" onClick={auth.logout}>Logout</button>
    )
}

export default LogOut 