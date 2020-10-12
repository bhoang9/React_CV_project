import React, { Component } from "react";

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

    handleSubmit(){
        //this.props.onSubmit(event);
        if(this.state.isActive === true){
            this.setState({isActive: false})
        }
        else{
            this.setState({isActive: true})
        }
    }

    render(){
        return(
            <div className="EducationInputMain">
                <div className="Header">
                    <p>Enter Education</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="schoolName"
                        placeholder="Name of School"
                        onChange={this.handleChange}>
                    </input>

                    <label>Year of Graduation</label>

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
                    <div id="buttonsDiv">
                            <button>Edit</button>
                            <button type="submit">Submit</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default EducationInput