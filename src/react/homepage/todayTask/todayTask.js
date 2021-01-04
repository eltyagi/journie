import React from "react";
import './todayTask.css';
import "tachyons";


class todayTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addTaskVisibility: false
        }


    }

    toggleAddTask = () => {
        this.setState({addTaskVisibility: !this.state.addTaskVisibility});
    }

    render(){
        return(
            <div className = 'todayTask'>
                <div onClick = {this.toggleAddTask} className = 'addTask_today pointer'>
                    Add New
                </div>

                <div style = {{visibility: this.state.addTaskVisibility ? "visible" : "hidden"}}>
                    <input type ="text" placeholder = "Task/Event" className = "input-field"></input>
                    <br/>
                    <input type ="text" placeholder = "Title" className = "input-field"></input>
                    <br/>
                    <input type ="text" placeholder = "Description" className = "input-field"></input>
                    <br/>
                    <p onClick = {this.toggleAddTask} className = 'add-button pointer'>Add</p>

                </div>
            </div>
        );
    }
}

export default todayTask;