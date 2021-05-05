import { Avatar, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Loader from '../Loader/Loader';
import MatSnackbar from '../MatSnackbar/MatSnackbar';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { closeOtpNotification, otpSiginIn, sendSuccessOff } from '../../Redux';
import { MESSAGES, OTP_LENGTH } from '../../Helper/const';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1, 0, 2),
    },
    button: {
        margin: theme.spacing(0, 0, 2),
    }
}));

const OtpSubmit = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [notificationType, setNotificationType] = useState('');
    const [message, setMessage] = useState('');

    let loading = useSelector(state => state.otp.loading);
    let showNotification = useSelector(state => state.otp.showNotification);
    let successMessage = useSelector(state => state.otp.successMessage);
    let errorMessage = useSelector(state => state.otp.errorMessage);
    let sendSuccess = useSelector(state => state.otp.sendSuccess);

    const otpLoginSchema = yup.object({
        otp: yup
            .string(MESSAGES.enterOtp)
            .length(OTP_LENGTH, MESSAGES.otpLength)
            .required(MESSAGES.requiredOtp),
    });

    const formik = useFormik({
        initialValues: {
            otp: ''
        },
        validationSchema: otpLoginSchema,

        onSubmit: (values) => {
            dispatch(otpSiginIn({
                otp: values.otp
            }));
            formik.resetForm();
        },
    });

    const resetNotification = () => {
        setTimeout(() => {
            dispatch(closeOtpNotification());
        }, 2000);
    }

    useEffect(() => {
        if(showNotification) {
            if(sendSuccess) {
                setNotificationType('success');
                setMessage(successMessage);
                dispatch(sendSuccessOff());
            } else {
                setNotificationType('error');
                setMessage(errorMessage);
            }
            resetNotification();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showNotification]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {
                loading ?
                    <Loader /> :
                    <>
                        {
                            showNotification && <MatSnackbar type={notificationType} message={message} openVal={true} />
                        }
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in via OTP
                                </Typography>
                                <form className={classes.form} onSubmit={formik.handleSubmit}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="OTP"
                                        autoComplete="otp"
                                        id="otp"
                                        name="otp"
                                        value={formik.values.otp}
                                        onChange={formik.handleChange}
                                        error={formik.touched.otp && Boolean(formik.errors.otp)}
                                        helperText={formik.touched.otp && formik.errors.otp}
                                        autoFocus
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Submit
                                    </Button>
                                    <Link to='/login' className='link' style={{ color: 'white' }}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                        >
                                            Log in with password
                                        </Button>
                                    </Link>

                                    <Grid container justify="flex-end">
                                        <Grid item>
                                            <Link to='/signup' className='link'>Don't have an account? Sign up</Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>
                        </Container>
                    </>
            }

        </motion.div>
    );
};

export default OtpSubmit;