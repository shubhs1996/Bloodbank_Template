import React from 'react'

function EligibilityCriteria() {
    return (
        <div className="section4_eligibility_container">
            <div className="section4_eligibility_caption">Who can donate!</div>
            <div className="section4_eligibility_criteria">
              <ul type="none">
                <li>The donor must be fit and healthy, and should not be suffering from transmittable diseases.</li>
                <li>The donor must be 18–65 years old and should weigh a minimum of 50  kg.</li>
                <li>Pulse rate should be between 50 and 100 without irregularities.</li>
                <li>A minimum of 12.5g/dL hemoglobin level</li>
                <li>Blood pressure- Diastolic: 50–100 mm Hg, Systolic: 100–180 mm Hg.</li>
                <li>Body temperature- Should be normal, with an oral temperature not exceeding 37.5 °C.</li>
                <li>The time period between successive blood donations should be more than 3 months.</li>
              </ul>
            </div>
          </div>
    )
}

export default EligibilityCriteria;
