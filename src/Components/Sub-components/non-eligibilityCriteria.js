import React from 'react'

function NonEligibilityCriteria() {
    return (
        <div className="section4_non_eligibility_container">
        <div className="section4_non_eligibility_caption">
          who can't donate!
   </div>
        <div className="section4_non_eligibility_criteria">
        {/*eligibity  points */}
          <ul type="none">
            <li>A person who has been tested HIV positive.</li>
            <li>Individuals suffering from ailments like cardiac arrest, hypertension, blood pressure, cancer, epilepsy, kidney ailments and diabetes.</li>
            <li>A person who has undergone ear/body piercing or tattoo in the past 6 months.</li>
            <li>Individuals who have undergone immunization in the past 1 month.</li>
            <li>Individuals treated for rabies or received Hepatitis B vaccine in the past 6 months.</li>
            <li>A person who has consumed alcohol in the past 24 hours</li>
            <li>Women who are pregnant or breastfeeding.</li>
            <li>Individuals who have undergone major dental procedures or general surgeries in the past 1 month.</li>
            <li>Women who have had miscarriage in the past 6 months</li>
            <li>Individuals who have had fits, tuberculosis,allergic disorders in the past</li>
            <li>Individuals who currently have asthma with active symptoms, and severe asthma patients</li>

          </ul>
        </div>
      </div>
    )
}

export default NonEligibilityCriteria;
