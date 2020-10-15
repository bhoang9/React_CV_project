import React, { Component } from "react";
import SubmitButton from "./SubmitButton";

class EducationInput extends Component {
    
    constructor(props){
        super()

        this.state = {
            isActive: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            <div className="EducationInput">
                <div className="header">
                    <p>Education</p>
                </div>
                {this.state.isActive ? (
                    <form onSubmit={this.handleSubmit}>
                    <div id="educationInputMain">
                        <input
                            name="schoolName"
                            placeholder="Name of School"
                            onChange={this.handleChange}>
                        </input>
                        <select 
                            name="gradYear"
                            onChange={this.handleChange}
                            value={this.props.gradYear}>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                        </select>
                    </div>
                    <br/>
                    <SubmitButton 
                        buttonName="Submit"
                        handleSubmit={this.handleSubmit} />
                    </form>
                ): (
                    <div id="educationDisplayDiv">
                        <p>{this.props.schoolName}</p>
                        <p>{this.props.gradYear}</p>
                        <SubmitButton 
                            buttonName="Edit"
                            handleSubmit={this.handleSubmit} />
                    </div>
                )}
            </div>

        )
    }
}

export default EducationInput