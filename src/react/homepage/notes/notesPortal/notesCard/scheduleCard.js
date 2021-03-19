import React from 'react';
import './scheduleCard.css';
import "tachyons"


class scheduleCard extends React.Component{
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
        fetch('http://localhost:3005/doneScheduleTask', {
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
        fetch('http://localhost:3005/notdoneScheduleTask', {
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
        fetch('http://localhost:3005/deleteScheduleTask', {
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

        const {key, title, desc, scheduleDate} = this.props;
        const scheduledate = scheduleDate.slice(0,10);
        return(
            <div className = 'taskC' style = {{backgroundColor: this.state.isDue ? "" :"aquamarine"}}>
            
                <div className = 'card-content' style = {{display: 'flex', justifyContent: 'spaceBetween'}}>
                    <div className = 'content'>
                    <div style = {{display: 'flex', alignItems: 'center'}}>
                        <div className = 'dot-type'></div><p className = 'card-type'>{scheduledate}</p>
                        </div>
                        <p className = 'card-title'>{title}</p>
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



                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap" rel="stylesheet"/>
            </div>
        );
    }
}

export default scheduleCard;
