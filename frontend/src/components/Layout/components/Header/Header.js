import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "~/App";
import styles from "./Header.module.scss";
import Button from "~/components/Button/Button";
import image from "~/assets/image";
const cx = classNames.bind(styles);

function Header() {
    const {
        userAuth,
        userAuth: { accessToken, profile_img },
    } = useContext(UserContext);
    return (
        <header className={cx("header")}>
            <div className={cx("container")}>
                <div className={cx("inner")}>
                    <div className={cx("logo")}>
                        <Link to="/">
                            <img src={image.logo} alt="Path Way" />
                        </Link>
                    </div>

                    <nav className={cx("navbar")}>
                        <ul className={cx("navbar__list")}>
                            <li className={cx("navbar__item")}>
                                <Link
                                    to="/destination"
                                    className={cx("navbar__link")}
                                >
                                    Destinations
                                </Link>
                            </li>
                            <li className={cx("navbar__item")}>
                                <Link
                                    to="/about"
                                    className={cx("navbar__link")}
                                    href="#!"
                                >
                                    About
                                </Link>
                            </li>
                            <li className={cx("navbar__item")}>
                                <Link
                                    to="/blog"
                                    className={cx("navbar__link")}
                                    href="#!"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className={cx("navbar__item")}>
                                <a className={cx("navbar__link")} href="#!">
                                    Page
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {accessToken ? (
                        "user is logged in"
                    ) : (
                        <div className={cx("action")}>
                            <Button text>
                                <Link to="/signin">Sign In</Link>
                            </Button>

                            <Button active className={cx("action__btn")}>
                                <Link to="/signup">Sign Up</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
