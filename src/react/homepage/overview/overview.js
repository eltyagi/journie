import React from 'react';
import "tachyons";
import OverCard from './overCard/overCard.js';
import './overview.css';


class overview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showCard: false,
            overviewData: {}
        }
    }

    onShowOverview = () => {
        this.setState({showCard: true})
    }

    onOverview = () => {
        fetch("http://localhost:3005/overview", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                openMessage: "Server accessed"
            })
        })
        .then((response => response.json()))
        .then(overviewData => {
            this.setState(Object.assign(this.state.overviewData, {overviewData: overviewData}))
        })  
    }

    componentDidMount = () => {
        this.onOverview();
    }

    render(){
        return(
            <div className = 'overview'>
                
                {
                    this.state.showCard
                    ? <OverCard/>
                    : <div onClick = {this.onShowOverview} className = 'card pointer'>
                    <div className = 'date f2'>
                        01
                    </div>
                    <div className = 'month f4'>
                        January
                    </div>
                </div>
                }
                
            </div>
        )
    }
}

export default overview;