import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUniversity, faUsers } from '@fortawesome/free-solid-svg-icons';

const BodyEnd = () => {
    return (
        <div className="bodyEnd1">
            <div className="bottom-body3">
                
                <h1><strong>Tutor with learnrr</strong></h1>
                <h5>Earn money sharing your expert knowledge with <br></br>students. Sign up to start tutoring online with learnrr</h5>
            </div>
                 <div className="middle-text3" >
                    <div className="icon-3"><FontAwesomeIcon icon={faUniversity} ></FontAwesomeIcon></div>
                    
                    <div className="bottom-body3">
                        <h3><strong>Find the best tutor</strong></h3>
                        
                    </div>
                </div>

                <div className="middle-text3" >
                    <div className="icon-3"><FontAwesomeIcon icon={faUsers} ></FontAwesomeIcon></div>
                    
                    <div className="bottom-body3">
                        <h3><strong>Take lessons anytime</strong></h3>
                        
                    </div>
                </div>
                <div className="middle-text3" >
                    <div className="icon-3"><FontAwesomeIcon icon={faUsers} ></FontAwesomeIcon></div>
                    
                    <div className="bottom-body3">
                        <h3><strong>Enter virtual classroom</strong></h3>
                        
                    </div>
                </div> 
                <div>
                <button>Become a tutor </button>
                </div>
                
        </div>
    )
}

export default BodyEnd;