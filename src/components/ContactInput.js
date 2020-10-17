import React, { Component } from "react";
import SubmitButton from "./SubmitButton";

class ContactInput extends Component {
    
    constructor(props){
        super();

        this.state ={
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
            <div className="ContactInputMain">
                <div className="header">
                    <p>Contact Info</p>
                </div>
                {this.state.isActive ? (
                    <form onSubmit={this.handleSubmit}>
                    <input
                        name = "name" 
                        placeholder="Enter Name"
                        onChange={this.handleChange} />
                    <input 
                        name = "email"
                        placeholder="Enter Email"
                        onChange={this.handleChange} />
                    <input 
                        name = "phone"
                        placeholder="Enter Phone"
                        onChange={this.handleChange} />
                    <br/>
                    <SubmitButton 
                        buttonName="Submit"
                        handleSubmit={this.handleSubmit} />
                    </form>

                ): (
                    <div id="contactDisplayDiv">
                        <p>{this.props.nameText}</p> <p>{this.props.emailText}</p> <p>{this.props.phoneText}</p>
                    <br/>
                    <SubmitButton 
                        buttonName="Edit"
                        handleSubmit={this.handleSubmit} />
                    </div>
                )}
            </div>
        )
    }


}

export default ContactInput;