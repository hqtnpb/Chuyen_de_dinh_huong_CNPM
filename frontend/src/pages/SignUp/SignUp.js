import React from 'react';
import styles from './SignUp.module.scss';
import image from '~/assets/image';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
function SignUp() {

    return (

        <div className={cx("signup")}>

            <img className={cx("img")} src={image.background_signup} alt="Background" />
            <div className={cx("signup-box")}>
                <h2 className={cx("title")}>Sign Up</h2>
                <div className={cx("btn")}>
                    <div className={cx("group")}>
                        <img className={cx("icon")} src={image.iconfacebook} />
                        <Button inactive className={cx("auth-btn")}>
                            Continue with Facebook </Button>
                    </div>
                    <div className={cx("group")}>
                        <img className={cx("icon","gg")} src={image.icongoogle} />
                        <Button inactive className={cx("auth-btn")}>
                            Continue with Google</Button>
                    </div>
                    <div className={cx("group")}>
                        <img className={cx("icon","ap")} src={image.iconapple} />
                        <Button inactive className={cx("auth-btn")}>
                            Continue with Apple</Button>
                    </div>
                </div>
                <div className={cx("separator")}>OR</div>
                <form className={cx("form")}>
                    <input className={cx("input")} type="text" name="firstName" placeholder="Your first name" />
                    <input className={cx("input")} type="text" name="lastName" placeholder="Your last name" />
                    <input className={cx("input")} type="email" name="email" placeholder="Email" />
                    <input className={cx("input")} type="password" name="password" placeholder="Password" />
                    <Button active className={cx("btn")}>Sign Up</Button>
                </form>
                <div className={cx("action")}>
                    <p className={cx("link")}>Have an account? </p>
                    <a href="/Login" className={cx("signin")}>Sign In</a>
                </div>
            </div>
        </div>
    );

}

export default SignUp;