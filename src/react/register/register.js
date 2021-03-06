import React from 'react';
import Logo from './logo.png';

class register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    onFnameChange = (event) => {
        this.setState({firstName: event.target.value});
    }
    onLnameChange = (event) => {
        this.setState({lastName: event.target.value});
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3005/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
        })
    }

    render(){
        return(
            <div className = 'register'>
                <img className = 'logo pa3' src = {Logo} width = '100px' height = 'auto'/>
                <main class="pa4 black-80 sign-in-form">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="f4 fw6 ph0 mh0">Sign Up</legend>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">First Name</label>
                        <input onChange = {this.onFnameChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="first-name"/>
                    </div>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Last Name</label>
                        <input onChange = {this.onLnameChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="last-name"/>
                    </div>
                    <div class="mt3">
                        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                        <input onChange = {this.onEmailChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div class="mv3">
                        <label class="db fw6 lh-copy f6" for="password">Password</label>
                        <input onChange = {this.onPasswordChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div class="">
                    <input onClick = {() => {this.props.onRouteChange('signin'); this.onSubmitRegister()}} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign up"/>
                    </div>
                    <div class="lh-copy mt3">
                    </div>
                </main>
            </div>
        );
    }
}

export default register;