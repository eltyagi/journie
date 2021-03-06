import React from 'react';
import './taskCard.css';
import "tachyons"
import Indent from './indent/indent.js';

class taskCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isDue: true,
            taskStatus: {}
        }
    }

    taskIsDue = () => {
        this.setState({isDue: !this.state.isDue})
    }

    onDoneButtonHit = () => {
        const taskid = parseInt(this.props.taskid)
        console.log("Task id is:", taskid);
        fetch('http://localhost:3005/doneTodayTask', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                taskid: taskid,
            })
            })
            .then((response => response.json()))
    }

    onNotDoneButtonHit = () => {
        const taskid = parseInt(this.props.taskid)
        console.log("Task id is:", taskid);
        fetch('http://localhost:3005/notdoneTodayTask', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                taskid: taskid,
            })
            })
            .then((response => response.json()))
    }

    onDeleteButtonHit = () => {
        const taskid = parseInt(this.props.taskid)
        console.log("Task id is:", taskid);
        fetch('http://localhost:3005/deleteTodayTask', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                taskid: taskid,
            })
            })
            .then((response => response.json()))
            .then(deletetask => this.setState({rerender: true}))
    }

    componentDidMount = () => {
        console.log("Component did mount", this.props.isdone)
        if(this.props.isdone === 1){
            this.setState({isDue: false})
        }
    }



    render(){

        const {key, type, title, desc} = this.props;
        const card_type  = type;
        return(
            <div className = 'taskCard' style = {{backgroundColor: this.state.isDue ? "" :"aquamarine"}}>
            
                <div className = 'card-content' style = {{display: 'flex', justifyContent: 'spaceBetween'}}>
                    <div className = 'content'>
                        <p className = 'card-title'>{title}</p><br/>
                        <p className = 'card-description'>{desc}</p><br/>
                    </div>
                    <div className = 'task-buttons'>
                        <div onClick = {() => {this.taskIsDue(); this.onDoneButtonHit()}} className = 'button-done'>
                            <span className="dot dot-done grow dim"></span>
                        </div>
                        <div onClick = {() => {this.taskIsDue(); this.onNotDoneButtonHit()}} className = 'button-done'>
                            <span className="dot dot-notdone grow dim"></span>
                        </div>
                        <div onClick = {this.onDeleteButtonHit} className = 'button-done'>
                            <span className="dot dot-delete grow dim"></span>
                        </div>
                    </div>
                    
                </div>



                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
            </div>
        );
    }
}

export default taskCard;
