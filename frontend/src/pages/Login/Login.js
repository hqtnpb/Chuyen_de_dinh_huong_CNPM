import React from "react";
import styles from "./Login.scss";
import classNames from "classnames";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import image from "~/assets/image";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);
function Login() {
    return (

        <div className={cx("main")}>
            <img className={cx("img")} src={image.background_login} alt="Background" />
            <div className={cx("login-container")}>
                <div className={cx("title")}>Sign In</div>
                <Button inactive className={cx("auth-btn")}>
                    <img className={cx("icon")} src={image.iconfacebook} />
                    Continue with Facebook </Button>
                <Button inactive className={cx("auth-btn")}>
                    <img className={cx("icon")} src={image.icongoogle} />
                    Continue with Google</Button>
                <Button inactive className={cx("auth-btn")}>
                    <img className={cx("icon")} src={image.iconapple} />
                    Continue with Apple</Button>
                <div className={cx("text")}>OR</div>
                <div className="form">
                    <input className={cx("input")} type="email" name="email" placeholder="Email" />
                    <input className={cx("input")} type="password" name="password" placeholder="Password" />
                    <Button text className={cx("fpass")}>Fogot password?</Button>
                    <Button active className={cx("signin-btn")}>Sign In</Button>
                </div>
                <div className="action">
                    <p className={cx("creat-acc")}>Don't have an account?</p>
                    <a className="signup" href="/SignUp">Sign up</a>
                </div>
            </div>
        </div>
    );
}
export default Login;