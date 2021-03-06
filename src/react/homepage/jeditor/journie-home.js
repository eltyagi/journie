import React from 'react';
import './journie-home.css';
import "tachyons";


class journieHome extends React.Component{
    constructor(props){
        super(props);
        var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ],
        today = new Date(),
        date = monthNames[today.getMonth()] + " "  + today.getDate() + ", " + today.getFullYear();
        this.state = {
            currentDate: date,
            userData: {},
            userid: this.props.signedInUser
        }
    }

    onEnterHomepage = () => {
        console.log("dash user",this.props.signedInUser)
        fetch('http://localhost:3005/welcome', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.userid
            })
        })
        .then(response => response.json())
        .then(userData => {
            this.setState(Object.assign(this.state.userData, ({userData: userData})))
        })

        console.log("Complete user data upon signin:", this.state.userData)
    }

   componentDidMount = () => {
        this.onEnterHomepage();
    } 

    render(){


        return(
            <div className = 'journieHome'>
            <div className = 'dash-box1'>
                <div className = 'dash-welcome'>
                    <p className = 'dash-welcome'>
                    Welcome back, <span className = 'user-name'>{this.state.userData.firstname}</span>!
                    </p>
                    <p className = 'dash-date'>
                        {this.state.currentDate}
                    </p>
                   
                </div>
            </div>


                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
            </div>
        );
    }
}

export default journieHome;
