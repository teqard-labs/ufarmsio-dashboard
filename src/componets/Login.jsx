import React from "react";
import "../App.css";
import Logo from "./media/logo.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class Login extends React.Component {
  componentDidMount() {
    this.auth = getAuth();
    console.log(this.auth);
  }
  login  = (username,password) =>{
    console.log(username,password)
  }
  render() {    
    return (
      <div className="flex justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div id="loginform" className="w-[60vw]">
          {/* <img src={Logo}
            alt="Logo"
            height="84"
            width="150"
            className='imgp'
            
          /> */}

          <FormHeader title="Login" />
          <Form />
          <OtherMethods />
        </div>
      </div>
    );
  }
}

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => (
  <div>
    <FormInput
      description="Username"
      placeholder="Enter your username"
      type="text"
    />
    <FormInput
      description="Password"
      placeholder="Enter your password"
      type="password"
    />
    <div id="button" className="row">
      <button>Log in</button>
    </div>{" "}
  </div>
);

const FormInput = (props) => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

const OtherMethods = (props) => (
  <div id="alternativeLogin" className="flex flex-wrap px-3">
    <p>
      Cannot log in? <a href="#">Click Here</a> to contact our customer support
      to help you!
    </p>
  </div>
);

export default Login;
