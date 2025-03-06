import React, { useState } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import image from "~/assets/image";
import Button from "~/components/Button/Button";
import Popup from "~/components/PopUp";

const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx("login")}>
            <Popup></Popup>
            <div className={cx("main")}>
                <img
                    className={cx("img")}
                    src={image.background_login}
                    alt="Login"
                />
                <div className={cx("box")}>
                    <div className={cx("title")}>Sign In</div>
                    <div className={cx("btn")}>
                        <div className={cx("gr-btn")}>
                            <img
                                className={cx("icon")}
                                src={image.iconfacebook}
                                alt="Facebook"
                            />
                            <Button inactive className={cx("auth-btn")}>
                                Continue with Facebook
                            </Button>
                        </div>
                        <div className={cx("btn")}>
                            <div className={cx("gr-btn")}>
                                <img
                                    className={cx("icon", "gg")}
                                    src={image.icongoogle}
                                    alt="Google"
                                />
                                <Button inactive className={cx("auth-btn")}>
                                    Continue with Google
                                </Button>
                            </div>
                        </div>
                        <div className={cx("btn")}>
                            <div className={cx("gr-btn")}>
                                <img
                                    className={cx("icon", "ap")}
                                    src={image.iconapple}
                                    alt="Apple"
                                />
                                <Button inactive className={cx("auth-btn")}>
                                    Continue with Apple
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx("separator")}>OR</div>
                    <div className={cx("form")}>
                        <input
                            className={cx("input")}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <input
                            className={cx("input")}
                            type="text"
                            name="password"
                            placeholder="Password"
                        />
                        <Button text className={cx("forgot")}>
                            Forgot Password?
                        </Button>
                        <Button active className={cx("signin")}>
                            Sign In
                        </Button>
                    </div>
                    <div className={cx("action")}>
                        <p className={cx("creat")}>Don't have an account?</p>
                        <a className={cx("signup")} href="./SignUp">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
