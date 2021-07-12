import React from 'react'

const Header = () => {
    return (
        <div className="ui small menu">
            <a className="active item">
                Home
            </a>
            <div className="right menu" style={{padding:'10px 0'}}>
                <button class="ui google red  button" >
                    <i class="google  icon"></i>
                    Sign In With Google
                </button>
            </div>
        </div>
    )
}

export default Header