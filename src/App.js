import React, { Component } from "react";
//import educationInput from "./educationInput"
//import expInput from "./expInput"
import ContactInput from "./components/ContactInput"
import EducationInput from "./components/EducationInput"
import ExpInput from "./components/ExpInput";

class App extends Component{

    constructor(props){
        super(props);

        this.state ={
            name: "",
            email: "",
            phone: "",
            schoolName: "",
            gradYear: "",
        }

        this.onTextFieldChange = this.onTextFieldChange.bind(this);
        this.onSubmit = this.onSubmit(this);
    }


    onTextFieldChange(event){
        const target = event.target;
        const value = target.value;
        const formField = target.name;

        this.setState({
            [formField]: value
        })
    }

    onSubmit(event){
        //Given the nature of the components, where not all of them have the
        //same amount of inputs, will probably have to take an array as input
        //and run thru array while rendering each value. Not sure at the moment
        //if that is proper use, will do more research
    }

    render(){
        return(
            
            <div className="cvMain">
                <ContactInput 
                    onTextFieldChange={this.onTextFieldChange}
                    handleSubmit={this.onSubmit}/>
                <br/>
                <EducationInput
                    onTextFieldChange={this.onTextFieldChange}
                    gradYear={this.state.gradYear}
                />
                <br />
                <ExpInput
                    onTextFieldChange={this.onTextFieldChange}
                    handleSubmit={this.onSubmit}/>                
            </div>
        )
    }
            
}

export default App;