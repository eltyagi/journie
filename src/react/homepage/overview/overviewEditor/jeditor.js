import React from 'react';
import 'tachyons';
import EditorJs from "react-editor-js";
import {EDITOR_JS_TOOLS} from "./constants.js";

class jeditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {},
            saveData: {}
        }
    }

    onEditorOpen = () => {
        fetch('http://localhost:3005/overviewJournal', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userid:this.props.userid
            })
            })
            .then((response => response.json()))
            .then(data => {
                this.setState(Object.assign(this.state.data, {data: data}))
            })   
            .catch(err => console.log("Editor Error:", err))
    }

 


    componentDidMount = () => {
        this.onEditorOpen();
        console.log("Journal Data:",this.state.data)
    }



    render(){
        console.log(this.state.data)
        return(
            <div className = 'editor'>
            <EditorJs
                tools={EDITOR_JS_TOOLS}
                data= {this.state.data.journaldata}
                autofocus = 'true'
                placeholder = 'Let`s write an awesome story!'
                enableReInitialize={true}
                instanceRef={instance => this.editorInstance = instance}
                onChange={async () => {
                    try {
                        const mydata = await this.editorInstance.save()
                        .then((mydata) => {
                            fetch('http://localhost:3005/editorSave', {
                                method: 'post',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({
                                    userid: this.props.userid,
                                    saveData: mydata
                                })
                                })
                                .then(console.log("Data being sent:", mydata))
                                .then((response => response.json()))
                                .then(response => {
                                    console.log(response)
                                })  
                                .catch(err => console.log("Editor Error:", err)) 
                        })
                        console.log('Data sent successfully')
                    } catch (error) {
                        console.error("Failed to save the new data")
                    }
                }} 
            />
            </div>

        );
    }
}

export default jeditor;