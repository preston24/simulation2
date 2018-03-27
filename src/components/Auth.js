import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return(
      <div>
        <div className="login_page_container">
          <img src="https://image.flaticon.com/icons/svg/25/25794.svg" alt="" className="login_logo" />
          <span className="login_input_wording">Username</span>
          <input className="login_input"></input>
          <span className="login_input_wording">Password</span>
          <input type="password" className="login_input"></input>
            <div className="login_buttons_container">
              <Link to={'/dashboard'}><button className="login_button">Login</button></Link>
              <Link to={'/dashboard'}><button className="register_button">Register</button></Link>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Login;