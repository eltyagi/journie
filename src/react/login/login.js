import React from 'react';
import Logo from './logo.png';
import './logic.css';
import 'tachyons';

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
}

  render() {
    return (
     <div>
      <img className = 'logo pa3' src = {Logo} width = '100px' height = 'auto'/>
      <main class="pa4 black-80 sign-in-form">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="f4 fw6 ph0 mh0">Sign In</legend>
              <div class="mt3">
                <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div class="mv3">
                <label class="db fw6 lh-copy f6" for="password">Password</label>
                <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
              </div>
            </fieldset>
            <div class="">
              <input onClick = {() => this.props.onRouteChange('homepage')} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
            </div>
            <div class="lh-copy mt3">
              <a href="#0" class="f6 link dim black db" onClick = {() => this.props.onRouteChange('register')}>Sign up</a>
              <a href="#0" class="f6 link dim black db">Forgot your password?</a>
            </div>
        </main>
    </div>
    );
   }
  }


export default login;
