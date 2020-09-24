import React, { Component } from 'react'
import { Form ,Button} from 'react-bootstrap'
import './DonorRegistration.css'
import SimpleReactValidator from 'simple-react-validator';

export default class DonorRegistration extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({element: (message, className) => <div className="validateClass">{message}</div>});
        this.state = {
requestorName:null,
patientName:null,
emailId:null,
phoneNumber:null,
bloodGroup:null,
unitsRequired:null,
district:null,
state:null,
pinCode:null,
city:null,
hospitalName:null,
        }

    }

onChangeHandler=(e)=>{
    this.setState({
        ...this.state,
        [e.target.id]:[e.target.value]
    })
}

onSubmitHandler = (e) => {
    e.preventDefault()
    if (this.validator.allValid()) {
      console.log('form submitted')
} else {
        this.validator.showMessages();
        this.forceUpdate();
      }
}


    render() {
        return (
            <div className="donorregistration_container">
            {/*instructions to how to request for blood */}
                <div className="donor_registration_instruction">
                    <p> How will it works?</p>
                    <div className="donor_registration_steps">
                        <ul type="none">
                            <li>If any of your relatives / friends is about to undergo a surgery and the hospital has asked you for blood</li>
                            <li>If any of your relatives / friends is about to undergo a surgery and the hospital has asked you for blood</li>
                            <li>If any of your relatives / friends is about to undergo a surgery and the hospital has asked you for blood</li>
                            <li>If any of your relatives / friends is about to undergo a surgery and the hospital has asked you for blood</li>
                            <li>If any of your relatives / friends is about to undergo a surgery and the hospital has asked you for blood</li>
                            <li>If any of your relatives / friends is about to undergo a surgery and the hospital has asked you for blood</li>

                        </ul>

                    </div>
                </div>

                {/*this is request form*/ }
                <div className="donor_registration_form_container">
                    Fill this form
<div className="donor_registration_form_inputs">
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="donor_registration_form_group">
                                <label>Requestor Name</label>
                                <input type="text" className="donor_registration_form_control" id="requestorName" placeholder="Donor's name" onChange={this.onChangeHandler} />
                                {this.validator.message('', this.state.requestorName, 'required')}
                            </div>
                            <div className="donor_registration_form_group">
                                <label>Patient Name</label>
                                <input type="text" className="donor_registration_form_control" id="patientName" placeholder="Donor's name" onChange={this.onChangeHandler}/>
                                {this.validator.message('', this.state.patientName, 'required')}
                            </div>
                            <div className="donor_registration_form_group">
                                <label>Email Id</label>
                                <input type="email" className="donor_registration_form_control" id="emailId" placeholder="example@abc.com" onChange={this.onChangeHandler}/>
                                {this.validator.message('', this.state.emailId, 'required')}
                            </div>
                            <div className="donor_registration_form_group">
                                <label>Phone Number</label>
                                <input type="telephone" className="donor_registration_form_control" id="phoneNumber" placeholder="9958xxxxxx" onChange={this.onChangeHandler}/>
                                {this.validator.message('', this.state.phoneNumber, 'required')}
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                                <div className="donor_registration_form_group">
                                    <label>Blood Group</label>
                                    <Form.Control as="select" id="bloodGroup" onChange={this.onChangeHandler} className="donor_registration_form_control" style={{ backgroundColor: 'white' }}>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                        <option>Any</option>
                                    </Form.Control>
                                    {this.validator.message('', this.state.bloodGroup, 'required')}
                                </div>
                                <div className="donor_registration_form_group">
                                    <label>Units Required</label>
                                    <input type="number" className="donor_registration_form_control" id="unitsRequired" placeholder="0" onChange={this.onChangeHandler}/>
                                    {this.validator.message('', this.state.unitsRequired, 'required')}
                                </div></div>


                                <div className="donor_registration_form_group">
                                <label>Hospital Name</label>
                                <input type="text" className="donor_registration_form_control" id="hospitalName" placeholder="e.g Asian Hospital" onChange={this.onChangeHandler}/>
                                {this.validator.message('', this.state.hospitalName, 'required')}
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                                <div className="donor_registration_form_group short_input">
                                    <label>District</label>
                                    <input type="text" className="donor_registration_form_control" id="district" placeholder="e.g faridabad" onChange={this.onChangeHandler}/>
                                    {this.validator.message('', this.state.district, 'required')}
                                </div>
                                <div className="donor_registration_form_group short_input">
                                    <label>City</label>
                                    <input type="text" className="donor_registration_form_control" id="city" placeholder="faridabad" onChange={this.onChangeHandler}/>
                                    {this.validator.message('', this.state.city, 'required')}
                                </div>
                                <div className="donor_registration_form_group short_input">
                                    <label>State</label>
                                    <input type="text" className="donor_registration_form_control" id="state" placeholder="Haryana" onChange={this.onChangeHandler}/>
                                    {this.validator.message('', this.state.state, 'required')}
                                </div>
                                <div className="donor_registration_form_group short_input">
                                    <label>PIN code</label>
                                    <input type="number" className="donor_registration_form_control" id="pinCode" placeholder="121001" onChange={this.onChangeHandler}/>
                                    {this.validator.message('', this.state.pinCode, 'required')}
                                </div>
                            </div>

                            <Button  className="submitButtonofForm" type="submit">submit</Button> 


                        </form>

                    </div>
                </div>

            </div>
        )
    }
}
