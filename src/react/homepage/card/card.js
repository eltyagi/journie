import React from 'react';
import 'tachyons';
import './card.css';
import Journal from './journal.png';
import Arrow from './arrow.png';


class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
        <div className = 'card'>
            <div className = 'card-content'>
                <img src = {Journal} height = '90px' width = 'auto'/>
                <p className = 'title f3 ma3'>I got a job today! But it was a tough day.</p>
                <div className = ''>
                    <p className = 'date'>27<br/>
                                          Sept</p>
                </div>
            </div>

            <div className = 'progress-bar'>
                <div className = 'bar'></div>
                <div className = 'view'>
                    <img className = 'grow pointer' src = {Arrow} height = '50px' width = 'auto'/>
                </div>
            </div>


            <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"/>
        </div>
        );
    }
}

export default Card;