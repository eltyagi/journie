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


class HomePage extends React.Component{
    constructor(props){
        super(props);
        var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ],
        today = new Date(),
        date = monthNames[today.getMonth()] + " "  + today.getDate() + ", " + today.getFullYear();
        this.state = {
            currentDate: date
        }
        
    }

    onAddToday = (event) => {

    }

    onAddDaily = (event) => {

    }

    render(){
        return(
            <div>
            <Router>
                <div className = 'header'>
                    <div className = 'home-bg' style = {{display: 'flex'}}>
                        <div className = 'menu-bar'>
                            <p className = 'heading'>
                                Journie.
                            </p>

                            <div className = 'menu'>
                                <Link to = "/" style={{ textDecoration: 'none', color: 'white' }}>
                                    <p className = 'menu-op pointer'>Journal</p>
                                </Link>
                                <Link to = "/dashboard" style={{ textDecoration: 'none', color: 'white' }}>
                                    <p className = 'menu-op pointer'>Overview</p>
                                </Link>
                                <Link to = "/progress" style={{ textDecoration: 'none', color: 'white' }}>
                                    <p className = 'menu-op pointer'>Progress</p>
                                </Link>
                                <Link to = "/settings" style={{ textDecoration: 'none', color: 'white' }}>
                                    <p className = 'menu-op pointer settings'>Settings</p>
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
                                        <div className = 'in-cont1-menu'>
                                            
                                            <p className = 'pointer dim in-cont1-op'>
                                            <Link to = "/" style={{ textDecoration: 'none', color: 'black' }}>
                                                Today
                                            </Link>
                                            </p>
                                            
                                            <Link to = "/daily" style={{ textDecoration: 'none', color: 'black' }}>
                                                <p className = 'pointer in-cont1-op'>Daily</p>
                                            </Link>

                                            <Link to = "/notes" style={{ textDecoration: 'none', color: 'black' }}>
                                                <p className = 'pointer in-cont1-op'>Notes</p>
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
                                                       dashboard
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
            </div>
        );
    }
}

export default HomePage;