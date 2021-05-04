import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';

import loader from '../assets/loader.gif'

const Register = lazy(() => import('../Components/Register/Register'));

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={
                    <div className="d-flex justify-content-center mt-5 pt-5">
                        <img src={loader} alt="" />
                    </div>
                }>
                    <Switch>
                        {/* <PrivateRoute exact path='/'>
                            <Redirect to='/dashboard' />
                        </PrivateRoute>

                        <PrivateRoute exact path='/dashboard'>
                            <Index />
                        </PrivateRoute> */}

                        <Route exact path='/' component={Register} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </>
    )
};

export default Routes;