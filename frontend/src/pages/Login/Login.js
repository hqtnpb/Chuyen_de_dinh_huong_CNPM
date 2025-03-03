import React, { useState } from "react";
import styles from "./Login.scss";
import classNames from "classnames";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import image from "~/assets/image";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    return (

        <div className={cx("main")}>
            <img className={cx("img")} src={image.background_login} alt="Background" />
            <div className={cx("login-container")}>
                <div className={cx("title")}>Sign In</div>
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
                <div className={cx("text")}>OR</div>
                <div className="form">
                    <input className={cx("input")} type="email" name="email" placeholder="Email"
                    value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input className={cx("input")} type="password" name="password" placeholder="Password" 
                    value={password} onChange={(event) => setPassword(event.target.value)} />
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