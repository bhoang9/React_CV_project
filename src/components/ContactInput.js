import React, { Component } from "react";

class ContactInput extends Component {
    
    constructor(props){
        super(props);

        this.state ={

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.props.onTextFieldChange(event);
    }

    handleSubmit(event){
        event.preventDefault();

    }


    render(){
        return(
            <div className="ContactInputMain">
                <div className="header">
                    <p>Enter Contact Info</p>
                </div>
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
                        <div id="buttonsDiv">
                            <button>Edit</button>
                            <button type="submit">Submit</button>
                        </div>

                    </form>
            </div>
        )
    }


}

export default ContactInput;