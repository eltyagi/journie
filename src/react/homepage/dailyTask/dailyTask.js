import React from "react";
import './dailyTask.css';
import "tachyons";
import DailyTaskPortal from './dailyTaskPortal/dailyTaskPortal.js';



class dailyTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addTaskVisibility: false,
            taskType: "",
            taskTitle: "",
            taskDesc: "",
            dailyTaskData: [],
            dailyTaskStatus: []
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
        const user = this.props.signedInUser
        fetch('http://localhost:3005/addDaily', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userid: user,
                taskType: this.state.taskType,
                taskTitle: this.state.taskTitle,
                taskDesc: this.state.taskDesc
            })
        })
            .then((response => response.json()))
            .then(dailyTaskData => {
                this.setState(Object.assign(this.state.dailyTaskData, {dailyTaskData: dailyTaskData}))
            }) 
            console.log(this.state.dailyTaskData)
    }

    onPageOpen = () => {
        const user = this.props.signedInUser
        console.log("What is user", user)
        fetch('http://localhost:3005/dailyTask', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userid: user,
            })
            })
            .then((response => response.json()))
            .then(dailyTaskData => {
                this.setState(Object.assign(this.state.dailyTaskData, {dailyTaskData: dailyTaskData}))
            }) 
            console.log(this.state.dailyTaskData)
    }


    componentDidMount = () => {
        this.onPageOpen();
    }

   

    render(){

        return(
            <div className = 'dailyTask'>

                <DailyTaskPortal className = 'mt2' taskData = {this.state.dailyTaskData} user = {this.props.signedInUser} />
                <div onClick = {this.toggleAddTask} className = 'addTask_daily pointer'>
                    +
                </div>

                <div className = 'add_dropdown' style = {{visibility: this.state.addTaskVisibility ? "visible" : "hidden"}}>
                    <input onChange = {this.onTaskTypeChange} type ="text" placeholder = "Task/Event" className = "input-field"></input>
                    <br/>
                    <input onChange = {this.onTaskTitleChange} type ="text" placeholder = "Title" className = "input-field"></input>
                    <br/>
                    <input onChange = {this.onTaskDesChange} type ="text" placeholder = "Description" className = "input-field"></input>
                    <br/>
                    <p onClick = {() => {this.toggleAddTask(); this.onSubmitTask()}} className = 'add-button pointer'>Add</p>
                </div>


            </div>
        );
    }
}

export default dailyTask;