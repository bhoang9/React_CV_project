import React, { Component } from "react";
//import educationInput from "./educationInput"
//import expInput from "./expInput"
import ContactInput from "./components/ContactInput"
import EducationInput from "./components/EducationInput"
import ExpInput from "./components/ExpInput";
import CvDisplay from "./components/CvDisplay";

class App extends Component{

    constructor(props){
        super();

        this.state ={
            name: "",
            email: "",
            phone: "",
            schoolName: "",
            gradYear: "",
            experience:"",
            displayAll: false
        }

        this.onTextFieldChange = this.onTextFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        if(this.state.displayAll === true){
            this.setState({displayAll: false})
        }
        else{
            this.setState({displayAll: true})
        }
    }

    render(){
        return(
            
            <div id="cvMain">
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
                <br />
                <br />
                <button 
                    id="submitAllButton"
                    onClick={this.onSubmit}> Submit All </button>
                {this.state.displayAll ? (
                    <CvDisplay 
                        {...this.state}
                    />
                ) : 
                <br/>
                }

            </div>
        )
    }
            
}

export default App;