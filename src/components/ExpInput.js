import React, { Component } from "react";

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
        //this.props.onSubmit(event);
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
            <div className="ExpInputMain">
                <div className="Header">
                    <p>Enter Professional Experience</p>
                    <br/>
                </div>
                {this.state.isActive ? (
                    <form onSubmit={this.handleSubmit}>
                    <textarea
                        name="experience"
                        onChange={this.handleChange}>
                    </textarea>
                    </form>
                ): (
                    <button>Edit</button>
                )}

                <div id="buttonsDiv">
                    <button 
                        type="submit"
                        onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>

        )
    }
}

export default ExpInput