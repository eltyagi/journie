import React from "react";
import './notes.css';
import "tachyons";
import NotesPortal from './notesPortal/notesPortal.js';



class notes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addTaskVisibility: false,
            taskTitle: "",
            taskDesc: "",
            dailyTaskData: []
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
        fetch('http://localhost:3005/notesAdd', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
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
        fetch('http://localhost:3005/notes', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
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

    componentDidMount = () => {
        this.onPageOpen();
    }

   

    render(){

        return(
            <div className = 'notes'>
                <div onClick = {this.toggleAddTask} className = 'addNotes pointer'>
                    Add New
                </div>

                <div style = {{visibility: this.state.addTaskVisibility ? "visible" : "hidden"}}>
                    <input onChange = {this.onTaskTitleChange} type ="text" placeholder = "Title" className = "input-field"></input>
                    <br/>
                    <input onChange = {this.onTaskDesChange} type ="text" placeholder = "Description" className = "input-field"></input>
                    <br/>
                    <p onClick = {() => {this.toggleAddTask(); this.onSubmitTask()}} className = 'add-button pointer'>Add</p>
                </div>

                <NotesPortal taskData = {this.state.dailyTaskData}/>


            </div>
        );
    }
}

export default notes;