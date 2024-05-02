import React, { Component, useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { userActions } from '../../sagas/userSlice';

function Logout (){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        // Fire Action for Remove all Item from localstorage and redirect to login page
        setTimeout(() => {
            dispatch(userActions.logout({ history: navigate }));
        }, [100]);
    }, []);

    return (
        <React.Fragment>
            <h1>&nbsp;</h1>
        </React.Fragment>
    )

};

export default Logout;

