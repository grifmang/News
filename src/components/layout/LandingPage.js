import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";


const LandingPage = () => {

    return (
        <div className='main-container'>
            <div className='login-container'>
                <h4>Click below to get the news!</h4>
                <div>
                    <Button tag={Link} to="/YourNews" color="primary" size="lg">Get The News!</Button>{' '}
                </div>
                
            </div>
        </div>
    )
}

export default LandingPage;