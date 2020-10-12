import React, { Component } from "react";

class cvDisplay extends Component{

    constructor(props){
        super()
    }

    getContactInfo(){
        contactInfo = [this.props.name, this.props.email, this.props.phone]
        
        return contactInfo
    }

    
    render(){
        var resumeInfo = this.props.entries;
        var contactInfo = this.getContactInfo()

        return (
            <ul>
                <li>contactInfo[0]</li>
                <li>contactInfo[1]</li>
                <li>contactInfo[2]</li>
            </ul>
        )
    }
}

export default cvDisplay