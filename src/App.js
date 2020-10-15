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
            experience:"",
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
                    nameText={this.state.name}
                    emailText={this.state.email}
                    phoneText={this.state.phone}
                    />
                <br/>
                <EducationInput
                    onTextFieldChange={this.onTextFieldChange}
                    schoolName={this.state.schoolName}
                    gradYear={this.state.gradYear}
                />
                <br />
                <ExpInput
                    onTextFieldChange={this.onTextFieldChange}
                    expText={this.state.experience}
                    />                
            </div>
        )
    }
            
}

export default App;