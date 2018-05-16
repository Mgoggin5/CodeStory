import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

class Main extends Component {
    render() {
        return (
            <div className="row">
                <div className="">
                    <h1>codestory</h1>
                    <a href="/login" className="button">Login</a>
                    <a href="/signup" className="button success">Signup</a>
                </div>
            </div>
        )
    }
}

// const responseGoogle = (response) => {
//     console.log(response);
//   }
   
//   ReactDOM.render(
//     <GoogleLogin
//       clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//       buttonText="Login"
//       onSuccess={responseGoogle}
//       onFailure={responseGoogle}
//     />,
//     document.getElementById('googleButton')
//   );

export default Main;