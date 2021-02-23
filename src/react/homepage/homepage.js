import React from 'react';
import 'tachyons';
import './homepage.css';
import 'tachyons';
import {Animated} from "react-animated-css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodayTask from './todayTask/todayTask.js';
import DailyTask from './dailyTask/dailyTask.js';
import Notes from './notes/notes.js';
import Editor from './jeditor/jeditor.js';
import Overview from './overview/overview.js';
import journal_image from './journal.png';
import overview_image from './icons8-view-64.png';
import graph_image from './graph.png';
import settings_image from './settings.png';

class HomePage extends React.Component{
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
            taskTab: 'today'
        }
        
    }


    onEnterHomepage = () => {
        fetch('http://localhost:3005/welcome', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.props.signedInUserId
            })
        })
        .then(response => response.json())
        .then(userData => {
            this.setState(Object.assign(this.state.userData, ({userData: userData})))
        })

        console.log(this.state.userData)
    }

   componentDidMount = () => {
        this.onEnterHomepage();
    } 

    onTodayClick = () => {
        this.setState({taskTab: 'today'})
    }

    onDailyClick = () => {
        this.setState({taskTab: 'daily'})
    }

    onNotesClick = () => {
        this.setState({taskTab: 'notes'})
    }

    render(){
        return(
            <div>
            <Router>
                <div className = 'header'>
                    <div className = 'home-bg' style = {{display: 'flex'}}>
                        <div className = 'menu-bar'>
                            <p className = 'heading'>
                                J.
                            </p>

                            <div className = 'menu'>
                                <Link to = "/" style={{ textDecoration: 'none', color: 'white' }}>
                                    <p className = 'menu-op pointer'><img alt = '' src = {journal_image} height = 'auto' width = '40px'/></p>
                                </Link>
                                <Link to = "/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                                    <p className = 'menu-op pointer'><img alt = '' src = {overview_image} height = 'auto' width = '40px'/></p>
                                </Link>
                                <Link to = "/progress" style={{ textDecoration: 'none', color: 'white' }}>
                                    <p className = 'menu-op pointer'><img alt = '' src = {graph_image} height = 'auto' width = '40px'/></p>
                                </Link>
                                <Link to = "/settings" style={{ textDecoration: 'none', color: 'white' }}>
                                    <p className = 'menu-op pointer settings'><img alt = '' src = {settings_image} height = 'auto' width = '40px'/></p>
                                </Link>
                            </div>
                        </div>


                        <div className = 'app-disp'>
                            <div className = 'inner-content' style = {{display: 'flex'}}>

                                <div className = 'in-cont1'>
                                    <div>
                                        <p className = 'curr-date'>
                                            {this.state.currentDate}
                                        </p>
                                        <p className = 'welcome-message'>
                                            Welcome back, {this.state.userData.firstname}!
                                        </p>
                                        <div className = 'in-cont1-menu'>
                                            
                                            
                                            <Link to = "/" style={{ textDecoration: 'none', color: 'black' }}>
                                            <p onClick = {this.onTodayClick} style = {{background: this.state.taskTab === 'today' ? "#fac1b98f" : "", color: this.state.taskTab === 'today' ? "crimson" : "black"}} className = 'pointer in-cont1-op'>
                                                Today
                                            </p>
                                            </Link>
                                            
                                            
                                            <Link to = "/daily" style={{ textDecoration: 'none', color: 'black' }}>
                                                <p onClick = {this.onDailyClick} style = {{background: this.state.taskTab === 'daily' ? "#fac1b98f" : "", color: this.state.taskTab === 'daily' ? "crimson" : "black"}} className = 'pointer in-cont1-op'>Daily</p>
                                            </Link>

                                            <Link to = "/notes" style={{ textDecoration: 'none', color: 'black' }}>
                                                <p onClick = {this.onNotesClick} style = {{background: this.state.taskTab === 'notes' ? "#fac1b98f" : "", color: this.state.taskTab === 'notes' ? "crimson" : "black"}} className = 'pointer in-cont1-op'>Notes</p>
                                            </Link>
                                        </div>

                                        <Switch>
                                            <Route path="/daily">
                                            <div>
                                                <DailyTask/>
                                            </div>
                                            </Route>
                                            <Route path="/notes">
                                                <div>
                                                    <Notes/>
                                                </div>
                                            </Route>
                                            <Route path="/progress">
                                                <div>
                                                    <h1>Working?</h1>
                                                </div>
                                            </Route>
                                            <Route path="/">
                                                <div>
                                                    <TodayTask/>
                                                </div>
                                            </Route>
                                        </Switch>
                                    </div>
                                </div>

                                <div className = 'in-cont2'>
                                    <div className = 'ma3'>
                                        <Switch>
                                                <Route path="/dashboard">
                                                    <div>
                                                       <Overview/>
                                                    </div>
                                                </Route>
                                                <Route path="/progress">
                                                    <div>
                                                        progress
                                                    </div>
                                                </Route>
                                                <Route path="/settings">
                                                    <div>
                                                        settings
                                                    </div>
                                                </Route>
                                                <Route path="/">
                                                    <div>
                                                        <Editor/>
                                                    </div>
                                                </Route>
                                            </Switch>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    
                </div>
            </Router>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Raleway:wght@100;800&display=swap" rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap" rel="stylesheet"></link>
            </div>
        );
    }
}

export default HomePage;