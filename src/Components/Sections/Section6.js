import React from 'react'
import { Avatar } from '@material-ui/core';

import './Section6.css'

function Section6() {
    return (
        <div className="section6_container">
            <hr className="section6_line" />
            <div className="section6_caption">
                Reviews
        </div>
            <div className="section6_text">Here's what some of our users are saying.</div>
            {/*lists of reviews */}
            <div className="section6_reviews_container">
                <div className="section6_review">
                    <div className="section6_review_by">
                        <Avatar alt="Svatar" src="https://avatars.dicebear.com/api/human/asdfghjkl.svg" />
                        <div className="section6_avatar_detail">
                            Full Name <br /><p >userName</p>
                        </div>
                    </div>
                    <div className="section6_review_text">
                        here will be their review or feedback
        </div>
                </div>

                <div className="section6_review">
                    <div className="section6_review_by">
                        <Avatar alt="Svatar" src="https://avatars.dicebear.com/api/human/dfghjkl.svg" />
                        <div className="section6_avatar_detail">
                            Full Name <br /><p >userName</p>
                        </div>
                    </div>
                    <div className="section6_review_text">
                        here will be their review or feedback</div>
                </div>
                <div className="section6_review">
                    <div className="section6_review_by">
                        <Avatar alt="Svatar" src="https://avatars.dicebear.com/api/human/asfghjkl.svg" />
                        <div className="section6_avatar_detail">
                            Full Name <br /><p >userName</p>
                        </div>
                    </div>
                    <div className="section6_review_text">
                        here will be their review or feedback</div>
                </div>

            </div>
        </div>
    )
}

export default Section6
