import React from 'react';
import './taskCard.css';


class taskCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className = 'taskCard'>
                <h1>{this.props.type}</h1>
            </div>
        );
    }
}

export default taskCard;
