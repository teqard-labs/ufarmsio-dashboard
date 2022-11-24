import React from 'react';
import '../App.css';


class Login extends React.Component{
  render(){
    return(
      <div id="loginform">
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
    )
  }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Log in"/>
   </div>
);

const FormButton = props => (
  <div id="button" className="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div className="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin" className='flex flex-wrap px-3'>
    <p>Cannot log in? <a href="#">Click Here</a> to contact our customer support to help you!</p>
  </div>
);

export default Login;