import React from 'react';
import './journie-home.css';
import "tachyons";
import Editor from './editor/jeditor.js';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {Line} from 'react-chartjs-2';


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
            openEditor: "no",
            todayTaskTotal: [],
            todayTaskDone: [],
            dailyTaskTotal: [],
            dailyTaskDone: [],
            scheduleTaskTotal: [],
            scheduleTaskDone: []

        }
    }

    onEnterHomepage = () => {
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

    onTodayTotalScore = () => {
        fetch('http://localhost:3005/todayTaskTotal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
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
        fetch('http://localhost:3005/todayTaskDone', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
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
        fetch('http://localhost:3005/dailyTaskTotal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
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
        fetch('http://localhost:3005/dailyTaskDone', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
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
        fetch('http://localhost:3005/scheduledTaskDone', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userid: this.state.userid
            })
        })
        .then(response => response.json())
        .then(scheduleTaskDone => {
            this.setState(Object.assign(this.state.scheduleTaskDone, ({scheduleTaskDone: scheduleTaskDone})))
        })
        .catch(err => console.log(err))

    }



   componentDidMount = () => {
        this.onEnterHomepage();
        this.onTodayTotalScore();
        this.onTodayDoneScore();
        this.onDailyTotalScore();
        this.onDailyDoneScore();
        this.onScheduleTotalScore();
        this.onScheduleDoneScore();
    } 

    onChangeEditor = () => {
        this.setState({openEditor: "editor"})
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
                        <div onClick = {this.onChangeEditor} className = 'journal-button pointer'>
                            + Journal
                        </div>
                    </div>
                        <div style = {{display: 'flex'}}>
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

                    <div className = 'dashboard-data' style = {{display: "flex"}}>

                        <div className = 'productivity-score'>
                            <Line
                            data={state}
                            options={{
                                borderColor: 'orange',
                                title:{
                                display:true,
                                text:'Productivity Score',
                                fontSize:20,
                                fontColor: 'white'
                                },
                                legend:{
                                display:true,
                                position:'top',
                                fontColor: 'white'
                                }
                            }}
                            />

                            <Line
                            data={state1}
                            options={{
                                borderColor: 'orange',
                                title:{
                                display:true,
                                text:'Productivity Score',
                                fontSize:20,
                                fontColor: 'white'
                                },
                                legend:{
                                display:true,
                                position:'top',
                                fontColor: 'white'
                                }
                            }}
                            />
                        </div>

                        <div className = 'dash-box3 dash-box3-walk-counter'>

                            <div className = 'dash-box3-weather dash-box3-box'>
                            <div className = "count">28°</div>
                                <div className = "title">Celsius</div>
                            </div>

                            <div className = 'dash-box3-steps dash-box3-box'>
                                <div className = "count">3035</div>
                                <div className = "title">Steps</div>
                            </div>

                            <div className = 'dash-box3-productivity dash-box3-box'>
                            <div className = "count">0.43</div>
                                <div className = "title">Productivity</div>
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
