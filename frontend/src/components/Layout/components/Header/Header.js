import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "~/components/Button/Button";
import image from "~/assets/image";
const cx = classNames.bind(styles);
console.log(image.logo);
function Header() {
    return (
        <header className={cx("header")}>
            <div className={cx("container")}>
                <div className={cx("inner")}>
                    <div className={cx("logo")}>
                        <img src={image.logo} alt="Path Way" />
                    </div>

                    <nav className={cx("navbar")}>
                        <ul className={cx("navbar__list")}>
                            <li className={cx("navbar__item")}>
                                <a className={cx("navbar__link")} href="#!">
                                    Destinations
                                </a>
                            </li>
                            <li className={cx("navbar__item")}>
                                <a className={cx("navbar__link")} href="#!">
                                    About
                                </a>
                            </li>
                            <li className={cx("navbar__item")}>
                                <a className={cx("navbar__link")} href="#!">
                                    Blog
                                </a>
                            </li>
                            <li className={cx("navbar__item")}>
                                <a className={cx("navbar__link")} href="#!">
                                    Page
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className={cx("action")}>
                        <Button text>Log In</Button>
                        <Button active className={cx("action__btn")}>
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
