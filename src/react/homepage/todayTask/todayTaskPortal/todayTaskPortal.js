import React from 'react';
import './todayTaskPortal.css';
import TaskCard from './taskCard/taskCard.js';

class todayTaskPortal extends React.Component{
    constructor(props){
        super();
        this.state = {

        }
    }



    render(){
        
        const cardArray = this.props.taskData.map(
            (user,i) => {
                return (
                    <TaskCard 
                    key = {i}
                    taskid = {this.props.taskData[i].todaytaskid}
                    type = {this.props.taskData[i].tasktype}
                    title = {this.props.taskData[i].tasktitle}
                    desc = {this.props.taskData[i].taskdesc}
                    isdone = {this.props.taskData[i].isdone}
                    />
                );
            })
        


        return(
            <div className = 'taskPortal'>
               {cardArray}



               <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
            </div>
        );
    }
}

export default todayTaskPortal;
