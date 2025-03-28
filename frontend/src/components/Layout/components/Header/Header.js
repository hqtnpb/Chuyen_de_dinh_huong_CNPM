import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { UserContext } from "~/App";
import styles from "./Header.module.scss";
import Button from "~/components/Button/Button";
import image from "~/assets/image";
import UserNavigation from "~/components/UserNavigation";
const cx = classNames.bind(styles);

function Header() {
    const {
        userAuth,
        userAuth: { accessToken, profile_img },
    } = useContext(UserContext);
    const [userNavPanel, setUserNavPanel] = useState(false);

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
                                >
                                    About
                                </Link>
                            </li>
                            <li className={cx("navbar__item")}>
                                <Link to="/blog" className={cx("navbar__link")}>
                                    Blog
                                </Link>
                            </li>
                            <li className={cx("navbar__item")}>
                                <Link
                                    to="/contact"
                                    className={cx("navbar__link")}
                                    href="#!"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {accessToken ? (
                        <div className={cx("user")}>
                            <Link to="/editor">
                                <div className={cx("write")}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    <p>Write</p>
                                </div>
                            </Link>

                            <Link to="/dashboard/notification">
                                <button className={cx("btn")}>
                                    <FontAwesomeIcon icon={faBell} size="lg" />
                                </button>
                            </Link>
                            <div className={cx("profile")}>
                                <img
                                    className={cx("user-avt")}
                                    src={profile_img}
                                    onClick={() =>
                                        setUserNavPanel(!userNavPanel)
                                    }
                                ></img>
                            </div>
                            {userNavPanel ? (
                                <UserNavigation></UserNavigation>
                            ) : (
                                ""
                            )}
                        </div>
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
