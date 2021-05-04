import { Avatar, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

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
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    button: {
        margin: theme.spacing(0, 0, 2),
    }
}));

const EmailOtp = () => {
    const classes = useStyles();

    const emailOtpSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required')
    });

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: emailOtpSchema,
        onSubmit: (values) => {
            
        },
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sent OTP to my email
                    </Typography>
                    <form className={classes.form} onSubmit={formik.handleSubmit}>
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Send OTP
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            <Link to='/signup-email-otp' className='link' style={{ color: 'white' }}>Send OTP to my phone</Link>
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            <Link to='/login' className='link' style={{ color: 'white' }}>Log in with password</Link>
                        </Button>

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to='/signup' className='link'>Don't have an account? Sign up</Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </motion.div>
    );
};

export default EmailOtp;