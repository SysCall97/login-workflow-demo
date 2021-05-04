import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { closeNotification } from '../../Redux';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function MatSnackbar({ type, message, openVal }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(openVal);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        setTimeout(() => {
            dispatch(closeNotification())
        }, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.root}>
            {
                ["error", "info", "success", "warning"].indexOf(type) > -1 &&
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity={type}>
                        {message}
                    </Alert>
                </Snackbar>
            }
        </div>
    );
}