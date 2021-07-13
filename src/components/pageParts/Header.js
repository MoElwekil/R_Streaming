import React from 'react'
import {BrowserRouter, Link } from 'react-router-dom'

const Header = () => {
    return (
        <BrowserRouter>
            <div className="ui small menu">
                <Link to="/" className="active item">
                    Home
                </Link>
                <div className="right menu" style={{padding:'10px 0'}}>
                    <button className="ui google red  button" >
                        <i className="google  icon"></i>
                        Sign In With Google
                    </button>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Header