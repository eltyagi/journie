import React from "react";
import './todayTask.css';
import "tachyons";
import TodayTaskPortal from './todayTaskPortal/todayTaskPortal.js';


class todayTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addTaskVisibility: false,
            taskType: "",
            taskTitle: "",
            taskDesc: "",
            todayTaskData: []
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

    toggleAddTask = () => {
        this.setState({addTaskVisibility: !this.state.addTaskVisibility});
    }

    onSubmitTask = () => {
        fetch('http://localhost:3005/', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                taskType: this.state.taskType,
                taskTitle: this.state.taskTitle,
                taskDesc: this.state.taskDesc
            })
        })
            .then((response => response.json()))
            .then(console.log("Communication achieved, for today tasks."))
            .then(todayTaskData => {
                this.setState(Object.assign(this.state.todayTaskData, {todayTaskData: todayTaskData}))
            })
            
            
        
    }

    render(){


        return(
            <div className = 'todayTask'>
                <div onClick = {this.toggleAddTask} className = 'addTask_today pointer'>
                    Add New
                </div>

                <div style = {{visibility: this.state.addTaskVisibility ? "visible" : "hidden"}}>
                    <input onChange = {this.onTaskTypeChange} type ="text" placeholder = "Task/Event" className = "input-field"></input>
                    <br/>
                    <input onChange = {this.onTaskTitleChange} type ="text" placeholder = "Title" className = "input-field"></input>
                    <br/>
                    <input onChange = {this.onTaskDesChange} type ="text" placeholder = "Description" className = "input-field"></input>
                    <br/>
                    <p onClick = {() => {this.toggleAddTask(); this.onSubmitTask()}} className = 'add-button pointer'>Add</p>
                </div>

                <TodayTaskPortal taskData = {this.state.todayTaskData}/>


            </div>
        );
    }
}

export default todayTask;