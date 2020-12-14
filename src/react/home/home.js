import React from 'react';
import './home.css';

class home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }

    render(){
        return(
            <div className = 'home'>
                <h1 className = ''>Welcome! Let's set up your journal!</h1>
                <div className = 'init-entry'>
                    
                </div>
            </div>
        )
    }
}

export default home;