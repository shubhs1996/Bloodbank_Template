import React, { useState, useEffect } from 'react'
import './Section4.css'
import EligibilityCriteria from '../Sub-components/eligibilityCriteria';
import NonEligibilityCriteria from '../Sub-components/non-eligibilityCriteria';
import EligibilityForm from '../Sub-components/eligibilityForm';
import EligibilityImage from '../Sub-components/EligibilityImage';


function Section4() {

  // const [type, setType] = useState('desktop')
  const [check,setCheck]=useState(false)
  const [eligible,setEligible]=useState(null);

  // const reportWindowSize = () => {
  //   window.innerWidth > 749 ? setType('desktop') : setType('mobile');
  // }

  // window.onresize = reportWindowSize;

 const onCheckHandler =()=>{
   setCheck(true)
 }

 const isEligibleHandler =(value)=>{
   console.log(value)
   setEligible(value)
   setCheck(false)
 }

  return (
    <div className="section4_container">
      <hr className="section4_line" />
      <div className="section4_caption">
        Can I donate Blood?
         </div>
      <div className="section4_info_container">
        <div id="section4_eligibility">
          <EligibilityCriteria />
        </div>
        <div id="section4_non_eligibility">
          <NonEligibilityCriteria />
        </div>
        <div id="section4_eligibility_form_or_image">
         {check?<EligibilityForm onClick={isEligibleHandler} />:<EligibilityImage  onClick={onCheckHandler} isEligible={eligible} onClick1={isEligibleHandler} />} 
        </div>
      </div>
    </div>
  )
}



export default Section4
