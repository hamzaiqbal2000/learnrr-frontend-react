import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return(
        <div className="header" >
            <div className="container1">
                <Navbar />

                <div className="middle-header" >
                    <h1><strong>Find the perfect <span>tutor</span><br></br>for your education</strong></h1>  
                    
                </div>
                <div className="bottom-header">
                     <input type="text" placeholder="  Search by Speciality" />
                    
                    <button>Search</button>
                </div>
            </div>
            
        </div>
    );
}

export default Header;