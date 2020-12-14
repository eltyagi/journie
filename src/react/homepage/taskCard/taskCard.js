import React from 'react';
import './taskCard.css';
import 'tachyons';
import Ex from './exercise.png';

class taskCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div style = {{display: 'flex'}}>
                    <div>
                        <img src = {Ex} height = 'auto' width = '80px'/>
                    </div>

                    <div>
                    <h3 className = 'classTitle'>
                        Physical Exercise
                    </h3>
                    <p className = 'taskDesc sub-text'>
                        4km run, followed by 1 hour of weight-training.
                    </p>
                    </div>

                    <div>
                        <div className = 'tick pointer grow' style = {{justifyContent: 'flex-end'}}></div>
                    </div>
                </div>
            </div>
        );
    }
}


export default taskCard;