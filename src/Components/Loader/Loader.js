import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../../css/app.css'

const Loader = () => {
    return <div className="loaderContainer"><CircularProgress /></div>;
};

export default Loader;