import React from 'react';
import './journie-home.css';
import "tachyons";
import Editor from './editor/jeditor.js';
import Graph from './graph.PNG';


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
            userid: this.props.signedInUser,
            openEditor: "no"
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

    onChangeEditor = () => {
        this.setState({openEditor: "editor"})
    }



    render(){


        return(
            <div className = 'journieHome'>
            {
                this.state.openEditor === "editor"
                ? <Editor userid = {this.state.userid}/>
                : 
                <div>
                    <div className = 'dash-box1' style = {{display: 'flex', alignItems: 'center'}}>
                        <div className = 'dash-welcome'>
                            <p className = 'dash-welcome'>
                            Welcome back, <span className = 'user-name'>{this.state.userData.firstname}</span>!
                            </p>
                            <p className = 'dash-date'>
                                {this.state.currentDate}
                            </p>
                        
                        </div>
                        <div onClick = {this.onChangeEditor} className = 'journal-button pointer grow'>
                            + Journal
                        </div>
                    </div>

                    <div className = 'dash-box2'>
                        <div className = 'dash-box2-title'>
                            Progress
                        </div>
                        <div className = 'dash-box2-content'>

                            <div>
                                <img src = ''></img>
                                <p>Today Tasks</p>
                                <div className = 'today-progress-bar'>
                                    <hr class="bar bar-today"/>   
                                </div>
                            </div>

                            <div>
                                <img src = ''></img>
                                <p>Daily Tasks</p>
                                <div className = 'daily-progress-bar'>
                                    <hr class="bar bar-daily"/>  
                                </div>
                            </div>

                            <div>
                                <img src = ''></img>
                                <p>Scheduled Tasks</p>
                                <div className = 'scheduled-progress-bar'>
                                    <hr class="bar bar-schedule"/>  
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className = 'dash-box2'>
                        <div className = 'dash-box3-title'>
                            Sentiment Analysis - Past Week
                        </div>
                        <div className = 'dash-box2-content'>
                            <div className = 'graph'>
                                <img src = {Graph}/>
                            </div>
                        </div>

                    </div>
                </div>
            }


                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
            </div>
        );
    }
}

export default journieHome;
