import React from 'react';
import "tachyons";
import OverCard from './overCard/overCard.js';
import './overview.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class overview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            overviewTodayTaskData: {},
            overviewJournalData: {},
            overviewTodayData: {},
            overviewDailyTaskData: {},
            overviewScheduledTaskData: {},
            startDate: new Date(),
            userid: this.props.signedInUser
        }
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        })  
    }

    onDatePickerClick = () => {
        fetch("http://localhost:3005/overviewTodayTask", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then((response => response.json()))
        .then(overviewTodayTaskData => {
            this.setState(Object.assign(this.state.overviewTodayTaskData, {overviewTodayTaskData: overviewTodayTaskData}))
        })  
      console.log(this.state.overviewTodayTaskData) 
      
      fetch("http://localhost:3005/overviewJournal", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then((response => response.json()))
        .then(overviewJournalData => {
            this.setState(Object.assign(this.state.overviewJournalData, {overviewJournalData: overviewJournalData}))
        })  
        console.log(this.state.overviewJournalData) 
    }

    componentDidMount = () => {
        this.handleChange();
        this.onDatePickerClick();
    }

    render(){
        return(
        <div className = 'overview'>
                <div className = 'overview-title'>
                    Overview
                </div>
                <div>
                    <div className="form-group" style = {{display: 'flex', alignItems: 'center'}}>
                        <div className = 'date-picker'>
                            <DatePicker
                            selected={ this.state.startDate }
                            onChange={ date =>  this.handleChange(date) }
                            placeholderText = "Click to Select a Date"
                            />
                        </div>
                        <div onClick = {this.onDatePickerClick} className = 'date-picker-btn pointer'>
                            Submit
                        </div>
                    </div>
                </div>

                
                
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Raleway:wght@100;800&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap" rel="stylesheet"></link>
        </div>
        )
    }
}

export default overview;