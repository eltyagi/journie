import React from 'react';
import './todayTaskPortal.css';
import TaskCard from './taskCard/taskCard.js';

class todayTaskPortal extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        const task_data = this.props;
        console.log(task_data)


        return(
            <div>
               
            </div>
        );
    }
}

export default todayTaskPortal;
