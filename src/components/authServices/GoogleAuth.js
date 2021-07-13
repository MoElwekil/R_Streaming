import React, {Component} from 'react'

class GoogleAuth extends Component{
    state = {isSignedIn: null}

    componentDidMount() {
        window.gapi.load('client:auth', () => {
            window.gapi.client.init({
                clientId: '208307546722-7nln10jdilbne1his0kqpvncqsu38tk0.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignInClick = () => {
        return this.auth.signIn();
    }

    onSignOutClick = () => {
        return this.auth.signOut();
    }

    renderGoogleAuthButton = () => {
        if(this.state.isSignedIn === null){
            return ''
        }else if(this.state.isSignedIn){
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

export default GoogleAuth