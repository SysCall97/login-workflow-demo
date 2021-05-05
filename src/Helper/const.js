const phoneRegEx = /(\+88)?-?01[1-9]\d{8}/g;
const PASSWORD_LENGTH = 8;
const OTP_LENGTH = 4;

const MESSAGES = {
    enterEmail: 'Enter your email',
    enterValidEmail: 'Enter a valid email',
    requiredEmail: 'Email is required',
    enterPassword: 'Enter your password',
    passwordLength: `Password should be of minimum ${PASSWORD_LENGTH} characters length`,
    requiredPassword: 'Password is required',
    invalidPhoneNumber: 'Phone number is not valid',
    successfullSignIn: 'Signed in successfully',
    successfullSignUp: 'Signed up successfully',
    enterOtp: 'Enter your OTP',
    otpLength: `OTP must contain ${OTP_LENGTH} letters`,
    requiredOtp: 'OTP is required',
    enterName: 'Enter your name',
    requiredName: 'Name is required',
    emailNotFound: 'Email not found',
    otpSendToEmail: 'OTP send to your email',
    otpSendFailed: 'OTP send failed. Please try again.',
    passwordNotMatched: 'Password not matched',
    userNotFound: 'User not found',
    otpSendToPhone: 'OTP send to your phone',
    emailAlreadyUsed: 'Email has already been taken',
    phoneAlreadyUsed: 'Phone number has already been taken',
    unknownError: 'Something wrong. Try later',
    otpNotMatched: 'OTP not matched'
}

const VIA = {
    email: 'email',
    phone: 'phone'
}

export {
    phoneRegEx,
    MESSAGES,
    VIA,
    PASSWORD_LENGTH,
    OTP_LENGTH
}