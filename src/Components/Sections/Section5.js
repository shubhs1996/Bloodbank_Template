import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Section5.css'
import img from '../../images/blood1.jpg'
import Card from '../Sub-components/Cards'

function Section5() {

const [isdimension ,setIsDimension]=useState(true)

const checkDimension =()=>{
    window.innerWidth >650 ?setIsDimension(true):setIsDimension(false) }
    

 window.onresize = checkDimension;




    return (
        <div className="section5_container">
        <hr className="section5_line"/>
        <div className="section5_caption">
        Upcoming Events
        </div>
       
       <div className="section5_events_detail_container">
     
     
       <div className="section5_event_detail">
       <div className="section5_event_title">
     LG offers washing machines range with Steam Technology
      </div>
       <div className="section5_event_info">
       This is for brief intro of event
       </div>
    <Link style={{textDecoration:'none',color:'red',marginBottom:'5px'}}  to={'/event/12345'}>Read More</Link>
       </div>
       
       <div className="section5_event_detail">
       <div className="section5_event_title">
       Title of Event
        </div>
         <div className="section5_event_info">
         This is for brief intro of event
         </div>
         <Link style={{textDecoration:'none',color:'red',marginBottom:'5px'}}  to={'/event/12345'}>Read More</Link>
       </div>
       

       <div className="section5_event_detail">
       <div className="section5_event_title">
       Title of Event
        </div>
         <div className="section5_event_info">
         This is for brief intro of event
         </div>
         <Link style={{textDecoration:'none',color:'red',marginBottom:'5px'}}  to={'/event/12345'}>Read More</Link>
       </div>
     </div>

        
    
    <Link to={'/eventlists'} className="section5_seeAll">See ALL</Link>
    
    
        </div>
    )
}

export default Section5
