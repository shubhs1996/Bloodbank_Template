import React from 'react'
import mieligible from '../../images/eligibleOrNot.jpg'
import redThumb from '../../images/redThumb.png'
import greenThumb from '../../images/greenThumb.png'


function EligibilityImage(props) {
const {isEligible}=props

const image= isEligible ?greenThumb :isEligible===false?redThumb:mieligible;

console.log(isEligible)

    return (
        <div className="section4_eligibilityImage_image_container "  style={{marginTop:0}}>
         <div className="section4_eligibilityImage_image">
         <h3 style={{textAlign:'center',marginBottom:'10px'}}>{isEligible ?"You are eligible":isEligible===false?"You are not eligible":null}</h3>
          <img src={image} className="section4_eligibilityImage_image_style"/>
         </div>
         <div className="section4_eligibilityImage_button_container" onClick={()=>isEligible===null?props.onClick():props.onClick1(null)}>
          {isEligible===null?'Click here to check':'Thank You'}
        </div>
        </div>
    )
}

export default EligibilityImage
