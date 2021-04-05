import React from 'react';
import './dailyTaskPortal.css';
import TaskCard from './dailyTaskCard/dailyTaskCard.js';

class dailyTaskPortal extends React.Component{
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
                    taskid = {this.props.taskData[i].dailytaskid}
                    type = {this.props.taskData[i].tasktype}
                    title = {this.props.taskData[i].tasktitle}
                    desc = {this.props.taskData[i].taskdesc}
                    user = {this.props.user}/>
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

export default dailyTaskPortal;
