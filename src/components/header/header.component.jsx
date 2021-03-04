import React from 'react';
import {Link} from 'react-router-dom' //used for routing to the pages
import './header.styles.scss'
//import {ReactComponent as Logo} from '../../assets/crown.svg' //getting logo file


//import {connect} from 'react-redux';
//functional component (as there is no data/state that is to be changed)

const Header = () => (
    <div className = "header" >
       
        <div className="options">
            <Link className="option" to="/signin">SIGN IN</Link>
            
        </div>
    </div>
    
)

export default Header;