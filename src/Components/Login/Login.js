import { Avatar, Button, Container, CssBaseline, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Loader from '../Loader/Loader';
import * as yup from 'yup';
import MatSnackbar from '../MatSnackbar/MatSnackbar';
import { useFormik } from 'formik';

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
}));

const Login = () => {
    const classes = useStyles();
    let loading = useSelector(state => state.user.loading);
    let showNotification = useSelector(state => state.user.showNotification);

    const [notificationType, setNotificationType] = useState('');
    const [message, setMessage] = useState('');

    const validationSchema = yup.object({
        phone: yup
            .number('Enter your phone number')
            .min(11, 'Number must contain 11 digits')
            .required('Phone number is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            phone: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

        },
    });

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
                                    Sign in
                                </Typography>
                                <form className={classes.form} onSubmit={formik.handleSubmit}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Phone Number"
                                        autoComplete="phone"
                                        id="phone"
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}
                                        autoFocus
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Password"
                                        type="password"

                                        id="password"
                                        name="password"

                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                        autoComplete="current-password"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container justify="flex-end">
                                        <Grid item>
                                            <Link href="signup" variant="body2">
                                                Don't have an account? Sign up
                                            </Link>
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

export default Login;