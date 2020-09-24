import React from 'react'
import {Link} from 'react-router-dom'
import './EventsList.css'

function EventsList() {
    return (
        <div className="eventslist_container">
            <div className="eventslist_title">
            <p>All Upcoming Events</p>
            </div>
            {/*Lists of all events */}
            <div className="eventslist_lists">
           <ul>
           <li><Link to={'/event/12345'}>Blood Donation Camp</Link></li>
           <li><Link to={'/event/12345'}>Blood Donation Camp</Link></li>
           <li><Link to={'/event/12345'}>Blood Donation Camp</Link></li>
           <li><Link to={'/event/12345'}>Blood Donation Camp</Link></li>
           <li><Link to={'/event/12345'}>Blood Donation Camp</Link></li>
           <li><Link to={'/event/12345'}>Blood Donation Camp</Link></li>
           <li><Link to={'/event/12345'}>Blood Donation Camp</Link></li>
           
           </ul>   
            
            </div>
        </div>
    )
}

export default EventsList
