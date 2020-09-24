import React, { useState, useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import { FaBars } from 'react-icons/fa'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import './NavBar.css'
import logo from '../../images/blood.jpg'
import { Link } from 'react-router-dom';


function NavBar() {

    
  const  [windowSize,setWindowSize] =useState(null)
    const [display, setDisplay] = useState('none')

    const reportWindowSize=()=> {
       window.innerWidth>749?setDisplay('none'):setDisplay(null);
       }

   window.onresize =reportWindowSize;

    const onClickHandler = () => {
        const dis = display === 'none' ? 'block' : 'none';

        setDisplay(dis)
    }


    return (
        <div className="section0_navbar">
            <div className="section0_navbar_container">
                <div className="section0_navbar_logo">
                    <img src={logo} alt="blood-drop" className="section0_navbar_logo_image" />
                </div>
                <div className="section0_separator"></div>
                <div className="section0_navbar_options">
                 <Link to={'/'} style={{textDecoration:'none',color:"black"}}><h3>Home</h3></Link>
                 <Link to={'/eventlists'} style={{textDecoration:'none',color:"black"}}><h3>Events</h3></Link>
                    <h3>About</h3>
                    <div className="section0_navbar_options_div">
                        <h3>Donate</h3>
                    </div>
                </div>

                {/*menu-bar*/}

                <div className="section0_dropdown">
                    <div className="section0_menu-toggler" onClick={onClickHandler}>
                        <div className="section0_bar1"></div>
                        <div className="section0_bar2"></div>
                        <div className="section0_bar3"></div>
                    </div>
                    
                    <div className="section0_dropdown-content" style={{display:display}}>
                    <Link to={'/'} className="dropdown_link"><h3>Home</h3></Link>
                    <Link to={'/eventlists'} className="dropdown_link"> <h3>Events</h3></Link>
                    <Link to={'#'} className="dropdown_link"><h3>About</h3></Link>
                    <div className="section0_navbar_options_div">
                        <h3>Donate</h3>
                    </div>
                    </div>
                </div>




            </div>
           


        </div>
    )
}

export default NavBar
