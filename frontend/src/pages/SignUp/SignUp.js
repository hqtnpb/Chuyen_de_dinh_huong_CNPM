import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import styles from "./SignUp.module.scss";
import image from "~/assets/image";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import axios from "axios";
import { storeInSession } from "~/common/session";

const cx = classNames.bind(styles);
function SignUp() {
    const authForm = useRef();
    const navigate = useNavigate();
    const userAuthThroughServer = (serverRoute, formData) => {
        axios
            .post(process.env.REACT_APP_SERVER_DOMAIN + serverRoute, formData)
            .then(({ data }) => {
                storeInSession("user", JSON.stringify(data));
                toast.success("Sign up successful! Redirecting...");
                setTimeout(() => navigate("/signin"), 2000); // Điều hướng sau 2 giây
            })
            .catch(({ response }) => {
                toast.error(response.data.error);
            });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        let serverRoute = "/auth/signup";

        //regex
        let emailRegex =
            /^(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        //form data
        let form = new FormData(authForm.current);
        let formData = {};

        for (let [key, value] of form.entries()) {
            formData[key] = value;
        }

        let { email, password } = formData;

        //form validation
        if (!email.length) {
            return toast.error("Email is required");
        }

        if (!emailRegex.test(email)) {
            return toast.error("Email is not valid");
        }

        if (!passwordRegex.test(password)) {
            return toast.error(
                "Password must be at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
            );
        }
        userAuthThroughServer(serverRoute, formData);
    };
    return (
        <div className={cx("signup")}>
            <div className={cx("inner")}>
                <img
                    className={cx("img")}
                    src={image.background_signup}
                    alt="Background"
                />
                <Toaster />
                <div className={cx("signup-box")}>
                    <h2 className={cx("title")}>Sign Up</h2>
                    <div className={cx("btn")}>
                        <div className={cx("group")}>
                            <img
                                className={cx("icon")}
                                src={image.iconfacebook}
                            />
                            <Button inactive className={cx("auth-btn")}>
                                Continue with Facebook{" "}
                            </Button>
                        </div>
                        <div className={cx("group")}>
                            <img
                                className={cx("icon", "gg")}
                                src={image.icongoogle}
                            />
                            <Button inactive className={cx("auth-btn")}>
                                Continue with Google
                            </Button>
                        </div>
                        <div className={cx("group")}>
                            <img
                                className={cx("icon", "ap")}
                                src={image.iconapple}
                            />
                            <Button inactive className={cx("auth-btn")}>
                                Continue with Apple
                            </Button>
                        </div>
                    </div>
                    <div className={cx("separator")}>OR</div>
                    <form ref={authForm} className={cx("form")}>
                        <input
                            className={cx("input")}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <input
                            className={cx("input")}
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <Button
                            active
                            onClick={handleSubmit}
                            className={cx("btn")}
                        >
                            Sign Up
                        </Button>
                    </form>
                    <div className={cx("action")}>
                        <p className={cx("link")}>Have an account? </p>
                        <Link to="/signin" className={cx("signin")}>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
