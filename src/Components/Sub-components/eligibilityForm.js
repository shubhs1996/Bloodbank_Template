
import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator'

export default class EligibilityForm extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({ element: (message, className) => <div className="validateClass">{message}</div> });
        this.state = {
            anyDiseases: null,
            age: null,
            weight: null,
            pulse: null,
            temp: null,
            months: null,
            hemoglobin: null,
            eligible: null,
        }
    }

//change handler
    onChangeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
        })
    }


//submit handler
    onSubmitHandler = (e) => {
        e.preventDefault()
        if (this.validator.allValid()) {
            const { anyDiseases, age, weight, hemoglobin, pulse, months, temp } = this.state;
            if (anyDiseases === 'No' && 17 < age < 66 && 49 < weight && 12 < hemoglobin < 19 && 50 < pulse < 100 && 3 < months && temp < 38) {
                this.props.onClick(true);
            } else {
                this.props.onClick(false);
            }
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }


    render() {
        return (
            <div className="section4_eligibility_form_container">
                <div className="section4_eligibility_form_caption">
                    Are you eligible or not?
            </div>
                <div className="section4_eligibility_form_inputs">
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="section4_eligibility_form_group">
                            <label>Any transmittable diseases :</label>
                            <input type="text" className="section4_eligibility_form_control" id="anyDiseases" placeholder="Enter Yes or No" onChange={this.onChangeHandler} />
                            {this.validator.message('', this.state.anyDiseases, 'required|in:Yes,No')}
                        </div>
                        <div className="section4_eligibility_form_group">
                            <label>Enter your age :</label>
                            <input type="number" className="section4_eligibility_form_control" id="age" placeholder="Age" onChange={this.onChangeHandler} />
                            {this.validator.message('', this.state.age, 'required|between:0,110')}
                        </div>
                        <div className="section4_eligibility_form_group">
                            <label>Enter your weight :</label>
                            <input type="number" className="section4_eligibility_form_control" id="weight" placeholder="Weight" onChange={this.onChangeHandler} />
                            {this.validator.message('', this.state.weight, 'required|max:3')}
                        </div>
                        <div className="section4_eligibility_form_group">
                            <label>Enter your pulse rate :</label>
                            <input type="number" className="section4_eligibility_form_control" id="pulse" placeholder="Pulse rate" onChange={this.onChangeHandler} />
                            {this.validator.message('', this.state.pulse, 'required|max:3')}
                        </div>
                        <div className="section4_eligibility_form_group">
                            <label>Enter your body temp in Celsius (approx)</label>
                            <input type="number" className="section4_eligibility_form_control" id="temp" placeholder="Body temp" onChange={this.onChangeHandler} />
                            {this.validator.message('', this.state.temp, 'required|between:34,48')}
                        </div>
                        <div className="section4_eligibility_form_group">
                            <label>Your hemoglobin level</label>
                            <input type="number" className="section4_eligibility_form_control" id="hemoglobin" placeholder="Hemoglobin level" onChange={this.onChangeHandler} />
                            {this.validator.message('', this.state.hemoglobin, 'required|between:0,19')}
                        </div>
                        <div className="section4_eligibility_form_group">
                            <label>Last Donation how many months ago?</label>
                            <input type="number" className="section4_eligibility_form_control" id="months" placeholder="Enter number of months" onChange={this.onChangeHandler} />
                            {this.validator.message('', this.state.months, 'required|max:3')}
                        </div>
                        <div className="section4_eligibility_form_group">
                            <button type="submit" className="section4_eligibility_form_button" >Submit</button>
                        </div>


                    </form>
                </div>
            </div>
        )
    }
}
