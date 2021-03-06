import React from 'react';
import { Redirect } from 'react-router-dom';

const WelcomePage = (props) => {
    if (!props.location.state || !props.location.state.guest)
    {
        return <Redirect to='/'/>;
    }

    return (
        <div className="row fgcs_top_row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                <div className="fgcs_content_greeting">
                    <h1>Welcome,</h1>
                    <h1><b>{props.location.state.guest.name}!</b></h1>
                </div>
                <p>You have been registered for this awesome service.<br />Please check your email listed below for instructions.</p>
                <h3 className="fgcs_welcome_guest_email"><b>{props.location.state.guest.email}</b></h3>
                <input
                    type="submit"
                    value="Sign In"
                    className="btn btn-primary float-right"
                />
            </div>
        </div>
    );
}

export default WelcomePage;