import React from "react";
import { Button } from 'reactstrap';

const CatCard = (props) => {

    return (
        <div>
            <Button 
                className="profile-site-buttons"
                outline 
                key={props.id}
                name={props.name}
                onClick={props.onClick}
                color="secondary"
                // user={props.user}
                >
                {props.name}
            </Button>
        </div>
    )
}

export default CatCard;