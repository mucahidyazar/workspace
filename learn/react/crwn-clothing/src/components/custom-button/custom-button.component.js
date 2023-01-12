import React from 'react';
import './custom-button.style.scss';

//children CustomButton taglerinin arasindaki degeri yakalar. <CustomButton> Sign In => bir children 'dir </CustomButton>
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...otherProps} >
        {children}
    </button>
)

export default CustomButton;