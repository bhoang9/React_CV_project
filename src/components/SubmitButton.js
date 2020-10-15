import React, { Component } from "react";

class SubmitButton extends Component{

    constructor(props){
        super()
    }

    render(){
        return(
            <button 
            class="button"
            onClick={this.props.handleSubmit}>{this.props.buttonName}</button>
        )

    }
}

export default SubmitButton