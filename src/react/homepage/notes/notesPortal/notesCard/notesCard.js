import React from 'react';
import './notesCard.css';
import "tachyons"


class notesCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isDue: true
        }
    }

    taskIsDue = () => {
        this.setState({isDue: !this.state.isDue})
    }

    render(){

        const {key, title, desc} = this.props;
        return(
            <div className = 'taskCard' style = {{backgroundColor: this.state.isDue ? "" :"aquamarine"}}>
            
                <div className = 'card-content' style = {{display: 'flex', justifyContent: 'spaceBetween'}}>
                    <div className = 'content'>
                        <p className = 'card-title'>{title}</p><br/>
                        <p className = 'card-description'>{desc}</p><br/>
                    </div>

                    <div onClick = {this.taskIsDue} className = 'button-done'>
                        Done
                    </div>
                </div>



                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap" rel="stylesheet"/>
            </div>
        );
    }
}

export default notesCard;
