import React from 'react'
import './Home.css'
import Navbar from '../../Components/NavBar/NavBar'
import Section1 from '../../Components/Sections/Section1'
import Section2 from '../../Components/Sections/Section2'
import Section3 from '../../Components/Sections/Section3'
import Section4 from '../../Components/Sections/Section4'
import Section5 from '../../Components/Sections/Section5'
import Section6 from '../../Components/Sections/Section6'
import Section7 from '../../Components/Sections/Section7'

function Home() {
    return (<div className="home_container">
 <div id='content2'><Section1/></div>
 <div id='content3'><Section2/></div>
 <div id='content4'><Section3/></div>
 <div id='content5'><Section4/></div>
 <div id='content6'><Section5/></div>
 <div id='content7'><Section6/></div>
<div id="content8"><Section7/></div>
    </div>
    )
}

export default Home
