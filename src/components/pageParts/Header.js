import React from 'react'
import {BrowserRouter, Link } from 'react-router-dom'

import GoogleAuth from '../authServices/GoogleAuth'

const Header = () => {
    return (
        <BrowserRouter>
            <div className="ui small menu">
                <Link to="/" className="active item">
                    Home
                </Link>
                <div className="right menu" style={{padding:'10px 0'}}>
                    <GoogleAuth />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Header