import React from "react";
import "./Login.scss";
import { useState } from "react";

function Login() {
        const [Email, setEmail] = useState('');
        const [Password, setPassWord] = useState('');

        const handleSignIn = () => {
            console.log("Đang đăng nhập với Email:", Email, "và Password:", Password);
            if (!Email || !Password) {
              alert("Vui lòng nhập đầy đủ thông tin!");
              return;
            }
          };
    return (

        <div className={cx("main")}>
            <div className={cx("img-bg")}>
                <img src={image.background} alt="Background" />
            </div>
            <div className={cx("login-container")}>
                <div className={cx("title")}>Sign In</div>
                <button className={cx("auth-btn")}><img src={image.iconfb} alt="Facebook" /> Continue with Facebook</button>
                <button className={cx("auth-btn")}><img src={image.icongg} alt="Google" /> Continue with Google</button>
                <button className={cx("auth-btn")}><img src={image.iconap} alt="Apple" />Continue with Apple</button>
                <div className={cx("text")}>OR</div>
                <input value={Email}
                onChange={e => setEmail(e.target.value)} className={cx("input-feild")} type="email" placeholder="Email"></input>
                <input value={Password}
                onChange={e =>setPassWord(e.target.value)} className={cx("input-feild")} type="password" placeholder="Password"></input>
                <div className={cx("forgot-pass")}>
                    <a href="">Forgot password?</a>
                </div>
                <button onClick={handleSignIn} className={cx("signin-btn")}>Sign In</button>
                <p className={cx("creat-acc")}>Don't have an account?
                    <a href="">Sign up</a>
                </p>
            </div>

        </div>
    );
}
export default Login;