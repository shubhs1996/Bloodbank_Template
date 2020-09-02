import React from 'react'
import {BiDonateBlood} from 'react-icons/bi'
import {MdPregnantWoman} from 'react-icons/md'
import {VscPerson} from 'react-icons/vsc'
import './Section2.css'
import logo from '../../images/blood.jpg'
import { Link } from 'react-router-dom'

function Section2() {
    return (
        <div className='section2_container'>
            <div className="section2_logo_brandName_container">
                <div className="section2_logo">
                    <img src={logo} className="section2_logo_style" />
                </div>
                <div className="section2_brandName">
                   RAKT DAAN
            </div>
            </div>
            <div className="section2_quote">
                Donate Blood Save Lives!
            </div>
            <div className="section2_options_container">
                <div className="section2_option1">
                <div className="section2_option1_icons">
                 <MdPregnantWoman size={100}/>
                 <VscPerson size={100}/>
                 </div>
                 <div  >
                    <h3>Do you or a loved one need Blood?</h3>
                    </div>
                    <div className="section2_requestBlood" onClick={()=>console.log('this is option1')}>
                    <Link to="/requestForm"  style={{textDecoration:'none',color:'red'}}> Request Blood</Link>
           </div>
                </div>
                <div className="section2_option2">
                <div className="section2_option2_icons">
                   <BiDonateBlood size={100}/> 
                   </div>
                   <div className="section2_option2_text">
                    <h3>Are you healthy and ready to donate Blood?</h3>
                    </div>
                    <div className="section2_donateBlood">
                        <Link to="/donateForm"  style={{textDecoration:'none',color:'white'}}>Donate Blood</Link>
           </div>
                </div>

            </div>

        </div>
    )
}

export default Section2
