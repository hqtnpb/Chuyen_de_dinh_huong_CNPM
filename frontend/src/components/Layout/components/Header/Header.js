import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { UserContext } from "~/App";
import styles from "./Header.module.scss";
import Button from "~/components/Button/Button";
import image from "~/assets/image";
import UserNavigation from "~/components/UserNavigation";
import axios from "axios";
const cx = classNames.bind(styles);

function Header() {
    const {
        userAuth,
        userAuth: { accessToken, profile_img, new_notification_available },
        setUserAuth,
    } = useContext(UserContext);
    const [userNavPanel, setUserNavPanel] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (accessToken) {
            axios
                .get(
                    process.env.REACT_APP_SERVER_DOMAIN +
                        "/notifications/new-notification",
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )
                .then(({ data }) => {
                    setUserAuth({ ...userAuth, ...data });
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }, [accessToken]);

    return (
        <header className={cx("header")}>
            <div className={cx("container")}>
                <div className={cx("inner")}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={cx("more-icon")}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    />

                    <div className={cx("logo")}>
                        <Link to="/">
                            <img src={image.logo} alt="Path Way" />
                        </Link>
                    </div>

                    <nav className={cx("navbar")}>
                        <ul
                            className={cx("navbar__list", {
                                show: isOpen,
                                hide: !isOpen,
                            })}
                        >
                            <button
                                className={cx("close-button")}
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
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
                        <div
                            className={cx("navbar__overlay", {
                                show: isOpen,
                                hide: !isOpen,
                            })}
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        ></div>
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
                                    <FontAwesomeIcon
                                        icon={faBell}
                                        size="lg"
                                        style={{
                                            color: new_notification_available
                                                ? "#FF5B26"
                                                : "black",
                                        }}
                                    />
                                    {new_notification_available ? (
                                        <span className={cx("dot")}></span>
                                    ) : (
                                        ""
                                    )}
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
                                {userNavPanel ? (
                                    <UserNavigation></UserNavigation>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className={cx("action")}>
                            <Button text className={cx("signin-btn")}>
                                <Link to="/signin">Sign In</Link>
                            </Button>

                            <Button active className={cx("signup-btn")}>
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
