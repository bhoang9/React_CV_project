import React, { Component } from "react";
import SubmitButton from "./SubmitButton";

class ExpInput extends Component {
    
    constructor(props){
        super()

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isActive: true
        };
    }

    handleChange(event){
        this.props.onTextFieldChange(event);
    }

    handleSubmit(event){
        event.preventDefault();

        if(this.state.isActive === true){
            this.setState({isActive: false})
        }
        else{
            this.setState({isActive: true})
        }
    }

    render(){
        return(
            <div 
                id="ExpInputMain"
                class="inputMain">
                <div className="header">
                    <p>Professional Experience</p>
                    <br/>
                </div>
                {this.state.isActive ? (
                    <div id="expInputDiv">
                        <form onSubmit={this.handleSubmit}>
                        <textarea
                            id="expTextArea"
                            name="experience"
                            onChange={this.handleChange}>
                        </textarea>
                        <br/>
                        <SubmitButton
                            buttonName="Submit"
                            onSubmit={this.handleSubmit}
                            />
                        </form>
                    </div>
                ): (
                    <div 
                        id="expDisplayDiv"
                        class="infoDisplayDiv">
                        <p>{this.props.expText}</p>
                        <SubmitButton 
                            buttonName="Edit"
                            handleSubmit={this.handleSubmit} />
                    </div>
                )}

            </div>

        )
    }
}

export default ExpInput