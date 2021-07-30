import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUniversity, faUsers } from '@fortawesome/free-solid-svg-icons';

const BodyTop = () => {
    return (
        <div className="BodyTop">
            <div className="body-container1" >

                <div className="middle-body" >
                    <h1><strong>Focus on the <span>skills</span>   you need</strong></h1>  
                    <h5>Prepare to achieve your goals with private tutors</h5>
                    
                </div>
                <div className="middle-text1" >
                    <div className="icon-1"><FontAwesomeIcon icon={faUniversity} ></FontAwesomeIcon></div>
                    
                    <div className="bottom-body">
                        <h3><strong>Immerse yourself in a new culture</strong></h3>
                        <h5>Connect with language experts from around the world</h5>
                    </div>
                </div>

                <div className="middle-text1" >
                    <div className="icon-1"><FontAwesomeIcon icon={faUsers} ></FontAwesomeIcon></div>
                    
                    <div className="bottom-body">
                        <h3><strong>Get expert help when you need it</strong></h3>
                        <h5>Learn to solve any problem in any language</h5>
                    </div>
                </div>

                <button>See Tutors</button>

            </div>
        </div>
    )
}

export default BodyTop;