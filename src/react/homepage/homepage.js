import React from 'react';
import 'tachyons';
import './homepage.css';
import Logo from './logo_v2.png';
import ProfImg from './prof.png';
import Add from './add.png';
import Card from './card/card.js';
import Home from './home.png';
import Journal from './journal.png';
import Dash from './dashboard.png';
import Task from './taskCard/taskCard.js';


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        
    }

    render(){
        return(
            <div>
                <div className = 'header'>
                    <div className = 'logo-section'>
                        <img className = 'logo pa0 ma0 center' src = {Logo} width = 'auto' height = '150px'/>
                        <ul>
                            <li className = 'menu-options menu-op1 grow sub-text'><img className = 'mr2 grow' src = {Home} height = '20px' width = 'auto'/>Home</li>
                            <li className = 'menu-options menu-op2 grow sub-text'><img className = 'mr2 grow' src = {Journal} height = '20px' width = 'auto'/>Journal</li>
                            <li className = 'menu-options menu-op3 grow sub-text'><img className = 'mr2 grow' src = {Dash} height = '20px' width = 'auto'/>Dashboard</li>
                        </ul>
                    </div>
                    <div className = 'view-bar pt1 mt3'>
                        <div className = 'title-view' style = {{display: 'flex', justifyContent: 'space-between'}}>
                            <p className = 'day'>
                                Your Activity<br/>
                                <span className = 'f3 curr-date'>Sept 28, 2020</span>
                            </p>

                            <img onClick = {()=>this.props.onRouteChange('editor')} className = 'add_journal mt5 pointer grow' src = {Add} width = 'auto' height = '70px'/>
                       </div>
                       <h3>Previously</h3>
                       <ul className = 'pa0 pointer'>
                           <li className = 'entry-det entry1'><Card/></li>
                           <li className = 'entry-det entry2'><Card/></li>
                           <li className = 'entry-det entry3'><Card/></li>
                           
                       </ul>
                    </div>

                    <div className = 'day-schedule'>
                        <h2 className = 'sub-text'>About Today</h2>
                        <ul>
                            <li><Task/></li>
                            <li><Task/></li>
                            <li><Task/></li>
                        </ul>
                    </div>
                    <div className = 'profile-info pt1 pl2'>
                        <p className = 'p-name pointer dim button-transparent'>Lakshya Tyagi</p><br/>
                        <img src = {ProfImg} width = 'auto' height = '70px'/>
                    </div>
                </div>


                <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"/>
            </div>
        );
    }
}

export default HomePage;