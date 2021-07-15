import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../../actions'

class GoogleAuth extends Component{

    componentDidMount() {
        window.gapi.load('client:auth', () => {
            window.gapi.client.init({
                clientId: '208307546722-7nln10jdilbne1his0kqpvncqsu38tk0.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn();
        }else{
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        return this.auth.signIn();
    }

    onSignOutClick = () => {
        return this.auth.signOut();
    }

    renderGoogleAuthButton = () => {
        if(this.props.isSignedIn === null){
            return ''
        }else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui google red  button" >
                    <i className="google  icon"></i>
                    Sign Out
                </button>
            )
        }else{
            return (
                <button onClick={this.onSignInClick} className="ui google red  button" >
                    <i className="google  icon"></i>
                    Sign In With Google
                </button>
            )
        }
    }
    
    render(){
        return(
            <div>
                {this.renderGoogleAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.googleAuth;
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)