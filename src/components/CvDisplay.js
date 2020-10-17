import React, { Component } from "react";

class CvDisplay extends Component{

    constructor(props){
        super()
    }

    getContactInfo(){
        var contactInfo = [this.props.name, this.props.email, this.props.phone]
        
        return contactInfo
    }

    
    render(){
        var contactInfo = this.getContactInfo();
        var educationInfo = [this.props.schoolName, this.props.gradYear];
        var expInfo = this.props.experience;

        return (
            <div id="cvDisplayMain">
                <div id="displayContactDiv">
                    <p>{contactInfo[0]}</p>
                    <p>{contactInfo[1]}</p>
                    <p>{contactInfo[2]}</p>
                </div>

                <div id="displayEducationDiv">
                    <p>educationInfo[0]</p>
                    <p>educationInfo[1]</p>
                </div>

                <div id="displayExpInfo">
                    <p>expInfo</p>
                </div>
            </div>

        )
    }
}

export default CvDisplay