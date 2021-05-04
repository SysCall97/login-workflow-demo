import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../Redux';
import Loader from '../Loader/Loader';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import MatSnackbar from '../MatSnackbar/MatSnackbar';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Register = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    let loading = useSelector(state => state.user.loading);
    let errorMessage = useSelector(state => state.user.error);
    let token = useSelector(state => state.user.token);
    let showNotification = useSelector(state => state.user.showNotification);

    const [notificationType, setNotificationType] = useState('');
    const [message, setMessage] = useState('');

    const registerSchema = yup.object({
        phone: yup
            .number('Enter your phone number')
            .min(11, 'Number must contain 11 digits')
            .required('Phone number is required'),
        name: yup
            .string('Enter your name')
            .required('Name is required'),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            phone: '',
            name: '',
            email: '',
            password: '',
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            dispatch(register(values));
        },
    });

    useEffect(() => {
        if (token?.length > 0) {
            setNotificationType('success');
            setMessage('Signned up successfully');
        } else if (errorMessage?.length) {
            setNotificationType('error');
            setMessage(errorMessage);
        }
    }, [token, errorMessage]);

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
                                    Sign up
                            </Typography>
                                <form className={classes.form} onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="phone"
                                                label="Phone Number"
                                                name="phone"
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                helperText={formik.touched.phone && formik.errors.phone}
                                                autoComplete="phone"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="name"
                                                label="Name"
                                                name="name"
                                                value={formik.values.name}
                                                onChange={formik.handleChange}
                                                error={formik.touched.name && Boolean(formik.errors.name)}
                                                helperText={formik.touched.name && formik.errors.name}
                                                autoComplete="name"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                                autoComplete="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                                error={formik.touched.password && Boolean(formik.errors.password)}
                                                helperText={formik.touched.password && formik.errors.password}
                                                autoComplete="current-password"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Sign Up
                                    </Button>
                                    <Grid container justify="flex-end">
                                        <Grid item>
                                        <Link to='/login' className='link'>Already have an account? Sign in</Link>
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

export default Register;