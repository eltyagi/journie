import React from 'react';
import 'tachyons';
import EditorJS from "react-editor-js";
import {EDITOR_JS_TOOLS} from "./constants.js";

class jeditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <EditorJS tools = {EDITOR_JS_TOOLS}/>
        );
    }
}

export default jeditor;