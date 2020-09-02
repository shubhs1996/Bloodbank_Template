import React from 'react'
import { Avatar } from '@material-ui/core';

import './Section6.css'

function Section6() {
    return (
        <div className="section6_container">
        <hr className="section6_line"/>
        <div className="section6_caption">
        Reviews
        </div>
        <div className="section6_text">Here's what some of our users are saying.</div>

        <div className="section6_reviews_container">
        <div className="section6_review">
        <div className="section6_review_by">
        <Avatar alt="Svatar" src="https://avatar.dicebar.com/api.human/fhfgfrwhfw.svg"/>
    <div className="section6_avatar_detail">
    Shubham Singh <br/><p >@itz_shuboy</p>
    </div>
        </div>
        <div className="section6_review_text">
        likhe jo khat tujhe
        </div>
        </div>

       
        <div className="section6_review">
        <div className="section6_review_by">
        <Avatar alt="Svatar" src="https://avatar.dicebar.com/api.human/fhfgfrwhfw.svg"/>
        <div className="section6_avatar_detail">
        Shubham Singh <br/><p >@itz_shuboy</p>
        </div>
        </div>
        <div className="section6_review_text"></div>
        </div>
        <div className="section6_review">
        <div className="section6_review_by">
        <Avatar alt="Svatar" src="https://avatar.dicebar.com/api.human/fhfgfrwhfw.svg"/>
        <div className="section6_avatar_detail">
        Shubham Singh <br/><p >@itz_shuboy</p>
        </div>
        </div>
        <div className="section6_review_text"></div>
        </div>
        
        </div>
        
       

        </div>
    )
}

export default Section6
