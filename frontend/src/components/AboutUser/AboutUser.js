import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faYoutube,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./AboutUser.module.scss";
import { getFullDay } from "~/common/date";
const cx = classNames.bind(styles);

const socialIcons = {
    facebook: faFacebook,
    instagram: faInstagram,
    github: faGithub,
    youtube: faYoutube,
};

function AboutUser({ bio, social_links, joinedAt }) {
    return (
        <div className={cx("user-bio")}>
            <p className={cx("bio")}>
                {bio.length ? bio : "Nothing to read here!!!"}
            </p>
            <div className={cx("social")}>
                <div className={cx("social-link")}>
                    {Object.keys(social_links).map((social) => {
                        let link = social_links[social];
                        let icon = socialIcons[social.toLowerCase()];
                        return link ? (
                            <Link to={link} key={social} target="_blank">
                                {icon ? (
                                    <FontAwesomeIcon
                                        icon={icon}
                                        className={cx("social-icon")}
                                    />
                                ) : (
                                    social
                                )}
                            </Link>
                        ) : null;
                    })}
                </div>
            </div>
            <p className={cx("time")}>Joined At: {getFullDay(joinedAt)}</p>
        </div>
    );
}

export default AboutUser;
