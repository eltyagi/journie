import React from 'react';
import "tachyons";
import EditorJs from "react-editor-js";
import {EDITOR_JS_TOOLS} from "./constants.js";


class overcard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }

    onEditorOpen = () => {
        fetch('http://localhost:3005/overview', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                taskType: this.state.taskType,
                taskTitle: this.state.taskTitle,
                taskDesc: this.state.taskDesc
            })
            })
            .then((response => response.json()))
            .then(data => {
                this.setState(Object.assign(this.state.data, {data: data}))
            })   
    }

 


    componentDidMount = () => {
        this.onEditorOpen();
    }

    render(){
        return(
            <div className = 'overcard'>
                 <EditorJs
                tools={EDITOR_JS_TOOLS}
                data= {this.state.data}
                autofocus = 'true'
                placeholder = 'Let`s write an awesome story!'
                enableReInitialize={true}
                instanceRef={instance => this.editorInstance = instance}
            />
            </div>
        )
    }
}

export default overcard;