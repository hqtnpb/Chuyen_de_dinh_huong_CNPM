import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import image from "~/assets/image";
const cx = classNames.bind(styles);
console.log(image.logo);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={image.logo} alt="Path Way" />
                </div>

                <nav className={cx("navbar")}>
                    <ul className={cx("navbar-list")}>
                        <li className={cx("navbar-item")}>
                            <a href="/">Home</a>
                        </li>
                        <li className={cx("navbar-item")}>
                            <a href="/about">About</a>
                        </li>
                        <li className={cx("navbar-item")}>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className={cx("action")}>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
