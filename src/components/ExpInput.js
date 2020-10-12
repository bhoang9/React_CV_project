import React, { Component } from "react";

class ExpInput extends Component {
    
    constructor(props){
        super()

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.props.onTextFieldChange(event);
    }

    handleSubmit(event){
        this.props.onSubmit(event);
    }

    render(){
        return(
            <div className="ExpInputMain">
                <div className="Header">
                    <p>Enter Professional Experience</p>
                    <br/>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <textarea
                        name="experience"
                        onChange={this.handleChange}>
                    </textarea>
                </form>
                <div id="buttonsDiv">
                            <button>Edit</button>
                            <button type="submit">Submit</button>
                </div>
            </div>

        )
    }
}

export default ExpInput