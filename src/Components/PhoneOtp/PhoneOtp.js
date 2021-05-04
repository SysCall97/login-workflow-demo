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
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    button: {
        margin: theme.spacing(0, 0, 2),
    }
}));

const PhoneOtp = () => {
    const classes = useStyles();

    const emailOtpSchema = yup.object({
        phone: yup
            .number('Enter your phone number')
            .min(11, 'Number must contain 11 digits')
            .required('Phone number is required')
    });

    const formik = useFormik({
        initialValues: {
            phone: ''
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
                        Sent OTP to my phone
                    </Typography>
                    <form className={classes.form} onSubmit={formik.handleSubmit}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="phone"
                            label="Phone number"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            autoComplete="phone"
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

                        <Link to='/signup-email-otp' className='link' style={{ color: 'white' }}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Send OTP to my email
                            </Button>
                        </Link>
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
        </motion.div>
    );
};

export default PhoneOtp;