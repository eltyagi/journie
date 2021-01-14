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
                    type = {this.props.taskData[i].type}
                    title = {this.props.taskData[i].title}
                    desc = {this.props.taskData[i].desc}/>
                );
            })
        


        return(
            <div>
               {cardArray}
            </div>
        );
    }
}

export default todayTaskPortal;
