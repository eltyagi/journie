import React from 'react';
import "tachyons";
import './overview.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {Line} from 'react-chartjs-2';
import EditorJs from "react-editor-js";
import {EDITOR_JS_TOOLS} from "./constants.js";


class overview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            overviewTodayTaskData: {},
            overviewJournalData: {},
            startDate: new Date(),
            userid: this.props.signedInUser,
            todayTaskTotal: [],
            todayTaskTotal: [],
            todayTaskDone: [],
            dailyTaskTotal: [],
            dailyTaskDone: [],
            scheduleTaskTotal: [],
            scheduleTaskDone: [],
            journalOverviewData: {},
            prodScore: []
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

        /*__________________________________________________________________________________________________________________*/

        fetch('http://localhost:3005/overviewTodayTaskTotal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(todayTaskTotal => {
            this.setState(Object.assign(this.state.todayTaskTotal, ({todayTaskTotal: todayTaskTotal})))
        })
        .catch(err => console.log(err))

        /*__________________________________________________________________________________________________________________*/

        fetch('http://localhost:3005/overviewTodayTaskDone', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(todayTaskDone => {
            this.setState(Object.assign(this.state.todayTaskDone, ({todayTaskDone: todayTaskDone})))
        })
        .catch(err => console.log(err))

        /*__________________________________________________________________________________________________________________*/

        fetch('http://localhost:3005/overviewDailyTaskTotal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(dailyTaskTotal => {
            this.setState(Object.assign(this.state.dailyTaskTotal, ({dailyTaskTotal: dailyTaskTotal})))
        })
        .catch(err => console.log(err))

        /*__________________________________________________________________________________________________________________*/

        fetch('http://localhost:3005/overviewDailyTaskDone', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(dailyTaskDone => {
            this.setState(Object.assign(this.state.dailyTaskDone, ({dailyTaskDone: dailyTaskDone})))
        })
        .catch(err => console.log(err))

        /*__________________________________________________________________________________________________________________*/

        fetch('http://localhost:3005/scheduledTaskTotal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(scheduleTaskTotal => {
            this.setState(Object.assign(this.state.scheduleTaskTotal, ({scheduleTaskTotal: scheduleTaskTotal})))
        })
        .catch(err => console.log(err))

        /*__________________________________________________________________________________________________________________*/

        fetch('http://localhost:3005/overviewScheduledTaskDone', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(scheduleTaskDone => {
            this.setState(Object.assign(this.state.scheduleTaskDone, ({scheduleTaskDone: scheduleTaskDone})))
        })
        .catch(err => console.log(err))

        /*__________________________________________________________________________________________________________________*/
        
        fetch('http://localhost:3005/overviewJournal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid:this.state.userid
            })
            })
            .then((response => response.json()))
            .then(journalOverviewData => {
                this.setState(Object.assign(this.state.journalOverviewData, {journalOverviewData: journalOverviewData}))
            })   
            .catch(err => console.log("Editor Error:", err))
            console.log("Date is:", this.state.startDate)
            console.log("Data is",this.state.journalOverviewData)



        fetch('http://localhost:3005/overviewProductivityScore', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
            })
            .then((response => response.json()))
            .then(prodScore => {
                this.setState(Object.assign(this.state.prodScore, {prodScore: prodScore}))
            })   
            .catch(err => console.log("Editor Error:", err))
            

    }

    /*__________________________________________________________________________________________________________________*/
    /*__________________________________________________________________________________________________________________*/
    /*__________________________________________________________________________________________________________________*/
    /*__________________________________________________________________________________________________________________*/
    /*__________________________________________________________________________________________________________________*/
    /*__________________________________________________________________________________________________________________*/

    onTodayTotalScore = () => {
        fetch('http://localhost:3005/overviewTodayTaskTotal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(todayTaskTotal => {
            this.setState(Object.assign(this.state.todayTaskTotal, ({todayTaskTotal: todayTaskTotal})))
        })
        .catch(err => console.log(err))

    }

    onTodayDoneScore = () => {
        fetch('http://localhost:3005/overviewTodayTaskDone', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(todayTaskDone => {
            this.setState(Object.assign(this.state.todayTaskDone, ({todayTaskDone: todayTaskDone})))
        })
        .catch(err => console.log(err))

    }

    onDailyTotalScore = () => {
        fetch('http://localhost:3005/overviewDailyTaskTotal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(dailyTaskTotal => {
            this.setState(Object.assign(this.state.dailyTaskTotal, ({dailyTaskTotal: dailyTaskTotal})))
        })
        .catch(err => console.log(err))

    }

    onDailyDoneScore = () => {
        fetch('http://localhost:3005/overviewDailyTaskDone', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(dailyTaskDone => {
            this.setState(Object.assign(this.state.dailyTaskDone, ({dailyTaskDone: dailyTaskDone})))
        })
        .catch(err => console.log(err))

    }

    onScheduleTotalScore = () => {
        fetch('http://localhost:3005/scheduledTaskTotal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(scheduleTaskTotal => {
            this.setState(Object.assign(this.state.scheduleTaskTotal, ({scheduleTaskTotal: scheduleTaskTotal})))
        })
        .catch(err => console.log(err))

    }

    onScheduleDoneScore = () => {
        fetch('http://localhost:3005/overviewScheduledTaskTotal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(scheduleTaskDone => {
            this.setState(Object.assign(this.state.scheduleTaskDone, ({scheduleTaskDone: scheduleTaskDone})))
        })
        .catch(err => console.log(err))

    }

    onScheduleDoneScore = () => {
        fetch('http://localhost:3005/overviewScheduledTaskDone', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(scheduleTaskDone => {
            this.setState(Object.assign(this.state.scheduleTaskDone, ({scheduleTaskDone: scheduleTaskDone})))
        })
        .catch(err => console.log(err))

    }

    onEditorOpen = () => {
        fetch('http://localhost:3005/overviewJournal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
            })
            .then((response => response.json()))
            .then(journalOverviewData => {
                this.setState(Object.assign(this.state.journalOverviewData, {journalOverviewData: journalOverviewData}))
            })   
            .catch(err => console.log("Editor Error:", err))
    }

    onOverviewProductivity = () => {
        fetch('http://localhost:3005/overviewProductivityScore', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewDate: this.state.startDate,
                userid: this.state.userid
            })
            })
            .then((response => response.json()))
            .then(prodScore => {
                this.setState(Object.assign(this.state.prodScore, {prodScore: prodScore}))
            })   
            .catch(err => console.log("Editor Error:", err))
    }

    componentDidMount = () => {
        this.handleChange();
        this.onDatePickerClick();
        this.onTodayTotalScore();
        this.onTodayDoneScore();
        this.onDailyTotalScore();
        this.onDailyDoneScore();
        this.onScheduleTotalScore();
        this.onScheduleDoneScore();
        this.onEditorOpen();
        this.onOverviewProductivity();
        console.log("My data is",this.state.data)
    }

    render(){

        const rev_int_percent = [0.2, 0.3, 0.7, 0.2, 0.8, 0.2, 0.4]
        const rev_int_percent1 = [1000, 2500, 3154, 4981, 2000, 3000, 3000]

        const state = {
            labels:['7','6','5','4','3','2','1'],
            datasets: [
                {
                label: 'Weekly Productivity Score',
                fontSize: 15,
                fontColor: 'white',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'orange',
                borderColor: 'brown',
                borderWidth: 3,
                data: rev_int_percent
                }
            ]
        }

        const state1 = {
            labels:['7','6','5','4','3','2','1'],
            datasets: [
                {
                label: 'Weekly Step Count',
                fontSize: 15,
                fontColor: 'white',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'orange',
                borderColor: 'red',
                borderWidth: 3,
                data: rev_int_percent1
                }
            ]
        }

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

                <div className = 'overview-score' style = {{display: 'flex'}}>
                            <div className = 'dash-box2'>
                                <div className = 'today-task-no task-content'>
                                    <p className = 'task-data-title'>Tasks Today</p>
                                    <p className = 'task-data'>{this.state.todayTaskDone.count}/{this.state.todayTaskTotal.count}</p>
                                    <Progress percent={(parseInt(this.state.todayTaskDone.count)/parseInt(this.state.todayTaskTotal.count))*100} status="success" />
                                
                                </div>
                            </div>

                            <div className = 'dash-box2'>
                                <div className = 'today-task-no task-content'>
                                    <p className = 'task-data-title'>Daily Tasks</p>
                                    <p className = 'task-data'>{this.state.dailyTaskDone.count}/{this.state.dailyTaskTotal.count}</p>
                                    <Progress percent={(parseInt(this.state.dailyTaskDone.count)/parseInt(this.state.dailyTaskTotal.count))*100} status="success" />
                                
                                </div>
                            </div>

                            <div className = 'dash-box2'>
                                <div className = 'today-task-no task-content'>
                                    <p className = 'task-data-title'>Scheduled Tasks</p>
                                    <p className = 'task-data'>{this.state.scheduleTaskDone.count}/{this.state.scheduleTaskTotal.count}</p>
                                    <Progress percent={(parseInt(this.state.scheduleTaskDone.count)/parseInt(this.state.scheduleTaskTotal.count))*100} status="success" />
                                
                                </div>
                            </div>
                </div>

                <div className = '' style = {{display: "flex"}}>

                        <div className = 'dash-box3 dash-box3-walk-counter'>

                            <div className = 'dash-box3-productivity dash-box3-box'>
                            <div className = "count">{this.state.prodScore.score}</div>
                                <div className = "title">Productivity</div>
                            </div>
                            
                        </div>

                        <div className = 'overviewEditor mt2'>
                        <EditorJs
                                tools={EDITOR_JS_TOOLS}
                                data= {this.state.journalOverviewData.journaldata}
                                autofocus = 'true'
                                placeholder = 'No Data Exists for this date.'
                                enableReInitialize={true}
                                instanceRef={instance => this.editorInstance = instance} 
                            />
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