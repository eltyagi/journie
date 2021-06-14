import React from "react";
import './scheduleTask.css';
import "tachyons";
import SchedulePortal from './notesPortal/schedulePortal.js';
import Refresh from './refresh.png';



class schedule extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addTaskVisibility: false,
            taskTitle: "",
            taskDesc: "",
            scheduleDate: "",
            scheduleTaskData: [],
            userData: {}
        }

    }

    onTaskTypeChange = (event) => {
        this.setState({taskType: event.target.value})
    }

    onTaskTitleChange = (event) => {
        this.setState({taskTitle: event.target.value})
    }

    onTaskDesChange = (event) => {
        this.setState({taskDesc: event.target.value})
    }

    onTaskDateChange = (event) => {
        this.setState({scheduleDate: event.target.value})
    }

    toggleAddTask = () => {
        this.setState({addTaskVisibility: !this.state.addTaskVisibility});
    }

    onSubmitTask = () => {
        const user = this.props.signedInUser
        fetch('http://localhost:3005/addSchedule', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userid: user,
                taskTitle: this.state.taskTitle,
                taskDesc: this.state.taskDesc,
                scheduleDate: this.state.scheduleDate
            })
        })
            .then((response => response.json()))
            .then(scheduleTaskData => {
                this.setState(Object.assign(this.state.scheduleTaskData, {scheduleTaskData: scheduleTaskData}))
            }) 
    }

    onPageOpen = () => {
        const user = this.props.signedInUser
        fetch('http://localhost:3005/scheduleTask', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userid: user
            })
            })
            .then((response => response.json()))
            .then(scheduleTaskData => {
                this.setState(Object.assign(this.state.scheduleTaskData, {scheduleTaskData: scheduleTaskData}))
            }) 

            console.log("Check", this.state.scheduleTaskData);
    }

    forceUpdateHandler = () => {
        this.onPageOpen();
    }

    componentDidMount = () => {
        this.onPageOpen();
    }

   

    render(){

        return(
            <div className = 'schedule'>

                <div onClick = {this.forceUpdateHandler} className = 'pointer refresh-button'><img width = '30px' height = 'auto' src = {Refresh}/></div>

                <SchedulePortal className = 'mt2' scheduleTaskData = {this.state.scheduleTaskData}/>
                <div onClick = {this.toggleAddTask} className = 'addTask_schedule pointer'>
                    +
                </div>

                <div className = 'add_dropdown' style = {{visibility: this.state.addTaskVisibility ? "visible" : "hidden"}}>
                    <input onChange = {this.onTaskTitleChange} type ="text" placeholder = "Title" className = "input-field"></input>
                    <br/>
                    <input onChange = {this.onTaskDesChange} type ="text" placeholder = "Description" className = "input-field"></input>
                    <br/>
                    <input onChange = {this.onTaskDateChange} type ="text" placeholder = "YYYY-MM-DD" className = "input-field"></input>
                    <br/>
                    <p onClick = {() => {this.toggleAddTask(); this.onSubmitTask()}} className = 'add-button pointer'>Add</p>
                </div>

            </div>
        );
    }
}

export default schedule;