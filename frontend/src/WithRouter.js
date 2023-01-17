/* eslint-disable */
import React, {  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
 
/**
 * 라우터에 대한 HOC 구현
 * https://stackoverflow.com/a/73173004/6725889
 * @param {any} WrappedComponent
 */
const WithRouter = WrappedComponent => props =>
{
    const navigate = useNavigate();
    const location = useLocation();
    // other hooks
 
    return (
        <WrappedComponent
            {...props}
            {...{ navigate, location }}
        />
    );
};
 
export default WithRouter;