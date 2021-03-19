import React from 'react';
import './schedulePortal.css';
import TaskCard from './notesCard/scheduleCard.js';

class schedulePortal extends React.Component{
    constructor(props){
        super();

        this.state = {

        }
    }

    render(){
        
        const cardArray = this.props.scheduleTaskData.map(
            (user,i) => {
                return (
                    <TaskCard 
                    key = {i}
                    taskid = {this.props.scheduleTaskData[i].scheduledtaskid}
                    title = {this.props.scheduleTaskData[i].tasktitle}
                    desc = {this.props.scheduleTaskData[i].taskdesc}
                    isdone = {this.props.scheduleTaskData[i].isdone}
                    scheduleDate = {this.props.scheduleTaskData[i].scheduled_date}
                    />
                );
            })
        


        return(
            <div>
               {cardArray}
            </div>
        );
    }
}

export default schedulePortal;
