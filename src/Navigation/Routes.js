import { AnimatePresence } from 'framer-motion';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';

import loader from '../assets/loader.gif'
import '../css/app.css'

const Register = lazy(() => import('../Components/Register/Register'));

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
                            {/* <PrivateRoute exact path='/'>
                            <Redirect to='/dashboard' />
                        </PrivateRoute>

                        <PrivateRoute exact path='/dashboard'>
                            <Index />
                        </PrivateRoute> */}

                            <Route exact path='/' component={Register} />
                        </Switch>
                    </AnimatePresence>
                </Suspense>
            </BrowserRouter>
        </>
    )
};

export default Routes;