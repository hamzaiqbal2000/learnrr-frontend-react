import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUniversity, faUsers } from '@fortawesome/free-solid-svg-icons';

const BodyLower = () => {
    return(
        
        <div className="bodyLower1">
            <div className="bodyLower2">
                
            <h1><strong>How learnrr works</strong></h1>
            <h5>Learn online with the world's best tutors</h5>
            </div>
                 <div className="middle-text2" >
                    <div className="icon-2"><FontAwesomeIcon icon={faUniversity} ></FontAwesomeIcon></div>
                    
                    <div className="bottom-body2">
                        <h3><strong>Find the best tutor</strong></h3>
                        <h5>Choose from over 1000+ online tutors. Use filters <br></br>to narrow your search and find the perfect fit</h5>
                    </div>
                </div>

                <div className="middle-text2" >
                    <div className="icon-2"><FontAwesomeIcon icon={faUsers} ></FontAwesomeIcon></div>
                    
                    <div className="bottom-body2">
                        <h3><strong>Take lessons anytime</strong></h3>
                        <h5>FInd the perfect time for your busy schedule. Book <br></br>lessons in seconds via desktop or mobile</h5>
                    </div>
                </div>
                <div className="middle-text2" >
                    <div className="icon-2"><FontAwesomeIcon icon={faUsers} ></FontAwesomeIcon></div>
                    
                    <div className="bottom-body2">
                        <h3><strong>Enter virtual classroom</strong></h3>
                        <h5>When it's lesson time, connect with tutor through <br></br>a video meeting link</h5>
                    </div>
                </div> 
                
        </div>
        
    )
}

export default BodyLower;