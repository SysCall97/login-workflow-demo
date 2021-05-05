import { AnimatePresence } from 'framer-motion';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import loader from '../assets/loader.gif';
import '../css/app.css'

const Register = lazy(() => import('../Components/Register/Register'));
const Login = lazy(() => import('../Components/Login/Login'));
const EmailOtp = lazy(() => import('../Components/EmailOtp/EmailOtp'))
const PhoneOtp = lazy(() => import('../Components/PhoneOtp/PhoneOtp'))
const OtpSubmit = lazy(() => import('../Components/OtpSubmit/OtpSubmit'))


const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={
                    <div className="loaderContainer">
                        <img src={loader} alt="" />
                    </div>
                }>
                    <AnimatePresence>
                        <Switch>
                            <Route exact path='/signup' component={Register} />
                            <Route exact path='/'>
                                <Redirect to='/signup' />
                            </Route>
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/signup-email-otp' component={EmailOtp} />
                            <Route exact path='/signup-phone-otp' component={PhoneOtp} />
                            <Route exact path='/submit-otp' component={OtpSubmit} />
                        </Switch>
                    </AnimatePresence>
                </Suspense>
            </BrowserRouter>
        </>
    )
};

export default Routes;