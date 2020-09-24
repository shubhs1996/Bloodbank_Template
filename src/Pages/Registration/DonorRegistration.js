import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import SimpleReactValidator from 'simple-react-validator'
import './DonorRegistration.css'

export default class DonorRegistration extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({ element: (message, className) => <div className="validateClass">{message}</div> });
        this.state = {
            donorName: null,
            emailId: null,
            phoneNumber: null,
            bloodGroup: null,
            lastDonation: null,
            district: null,
            state: null,
            pinCode: null,
            city: null,
        }
    }


    onChangeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: [e.target.value]
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

            {/*List of instruction how you can donate */}
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
                <div className="donor_registration_form_container">
                    Fill this form
<div className="donor_registration_form_inputs">
                        {/*form   */}
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="donor_registration_form_group">
                                <label>Donor's Name</label>
                                <input type="text" className="donor_registration_form_control"
                                    id="donorName" placeholder="Donor's name" onChange={this.onChangeHandler} />
                                {this.validator.message('', this.state.donorName, 'required')}
                            </div>
                            <div className="donor_registration_form_group">
                                <label>Email Id</label>
                                <input type="email" className="donor_registration_form_control" id="emailId" placeholder="example@abc.com" onChange={this.onChangeHandler} />
                                {this.validator.message('', this.state.emailId, 'required')}
                            </div>
                            <div className="donor_registration_form_group">
                                <label>Phone Number</label>
                                <input type="telephone" className="donor_registration_form_control" id="phoneNumber" placeholder="9958xxxxxx" onChange={this.onChangeHandler} />
                                {this.validator.message('', this.state.phoneNumber, 'required')}
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                                <div className="donor_registration_form_group">
                                    <label>Blood Group</label>
                                    <Form.Control as="select" id="bloodGroup" className="donor_registration_form_control" onChange={this.onChangeHandler} style={{ backgroundColor: 'white' }}>
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
                                    <label>Last Donation</label>
                                    <input type="date" className="donor_registration_form_control" id="lastDonation" placeholder="01/01/2020" onChange={this.onChangeHandler} />
                                    {this.validator.message('', this.state.lastDonation, 'required')}
                                </div></div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                                <div className="donor_registration_form_group short_input">
                                    <label>District</label>
                                    <input type="text" className="donor_registration_form_control" id="district" placeholder="Donor's name" onChange={this.onChangeHandler} />
                                    {this.validator.message('', this.state.district, 'required')}
                                </div>
                                <div className="donor_registration_form_group short_input">
                                    <label>City</label>
                                    <input type="text" className="donor_registration_form_control" id="city" placeholder="Donor's name" onChange={this.onChangeHandler} />
                                    {this.validator.message('', this.state.city, 'required')}
                                </div>
                                <div className="donor_registration_form_group short_input">
                                    <label>State</label>
                                    <input type="text" className="donor_registration_form_control" id="state" placeholder="Donor's name" onChange={this.onChangeHandler} />
                                    {this.validator.message('', this.state.state, 'required')}
                                </div>
                                <div className="donor_registration_form_group short_input">
                                    <label>PIN code</label>
                                    <input type="text" className="donor_registration_form_control" id="pinCode" placeholder="Donor's name" onChange={this.onChangeHandler} />
                                    {this.validator.message('', this.state.pinCode, 'required')}
                                </div>
                            </div>

                            {/*submit button */}
                            <Button className="submitButtonofForm" type="submit">submit</Button>

                        </form>

                    </div>
                </div>

            </div>
        )
    }
}
