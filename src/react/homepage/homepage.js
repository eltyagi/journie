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
import Task from './taskCard/taskCard.js';
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

    render(){
        return(
            <div>
                <div className = 'header'>
                    <div className = 'home-bg' style = {{display: 'flex'}}>
                        <div className = 'menu-bar'>
                            <p className = 'heading'>
                                Journie.
                            </p>

                            <div className = 'menu'>
                                <p className = 'menu-op pointer'>Journal</p>
                                <p className = 'menu-op pointer'>Track</p>
                                <p className = 'menu-op pointer settings'>Settings</p>
                            </div>
                        </div>


                        <div className = 'app-disp'>
                            <div className = 'inner-content' style = {{display: 'flex'}}>

                                <div className = 'in-cont1'>
                                    <div>
                                        <p className = 'curr-date'>
                                            {this.state.currentDate}
                                        </p>

                                        <p className = 'in-cont1-title'>
                                            To-Do
                                        </p>
                                    </div>
                                </div>

                                <div className = 'in-cont2'>
                                    <div className = 'ma3'>
                                    <Editor/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
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