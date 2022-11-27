import React from "react";
import "../App.css";
import Logo from "./media/logo1.jpg";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import redirect from "react-router-dom";

class Login extends React.Component {
  componentDidMount() {
    this.auth = getAuth();
    console.log(this.auth);
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        const uid = user.uid;
        window.location.pathname = process.env.PUBLIC_URL + "/myfarms";
      } else {
      }
    });
  }
  login = (username, password) => {
    signInWithEmailAndPassword(this.auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  render() {
    return (
      <div className="flex justify-center h-screen bg-gradient-to-r from-red-500 via-orange-400  to-yellow-400 ">
        <div id="loginform" className="w-[24vw] mt-10">
          <img src={Logo} alt="logo" className="w-[22vh] h-[12vh] flex justify-center ml-24 p mt-5" />
          <FormHeader title="Login" />
          <Form login={this.login} />
          <OtherMethods />
        </div>
      </div>
    );
  }
}

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
let username;
let password;
const Form = (props) => (
  <div>
    <div className="row">
      <label>Username</label>
      <input
        onChange={(e) => {
          username = e.target.value;
        }}
        type="text"
        placeholder="Enter your username"
      />
    </div>
    <div className="row">
      <label>Password</label>
      <input
        onChange={(e) => {
          password = e.target.value;
        }}
        type="password"
        placeholder="Enter your password"
      />
    </div>
    <div id="button" className="row">
      <button
        onClick={() => {
          props.login(username, password);
        }}
      >
        Log in
      </button>
    </div>{" "}
  </div>
);

const OtherMethods = (props) => (
  <div id="alternativeLogin" className="flex flex-wrap px-3">
    <p className="flex flex-wrap justify-center">
      Cannot log in?<a href="#" className="text-violet-600">Click Here</a> to contact our customer support
      to help you!
    </p>
  </div>
);

export default Login;
