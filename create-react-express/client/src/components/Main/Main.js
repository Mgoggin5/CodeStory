import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from "react-facebook-login";

class Main extends Component {
    render() {
        return (
            <div className="row">
                <div className="">
                    <h1>codestory</h1>

                    <GoogleLogin
                        clientId="443649016761-78rjojq0drcmubnv4lj4v1qv0jc6ta97.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />

                    <FacebookLogin
                        appId="12345"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}
                    />

                    <a href="/signup" className="button success">Signup</a>
                </div>
            </div>
        )
    }
}

export default Main;