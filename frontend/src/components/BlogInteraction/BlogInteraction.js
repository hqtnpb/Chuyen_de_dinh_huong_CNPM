import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./BlogInteraction.module.scss";
import { useContext } from "react";
import { BlogContext } from "~/pages/BlogDetails/BlogDetails";
import {
    faFacebook,
    faGithub,
    faYoutube,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button";
import { UserContext } from "~/App";
const cx = classNames.bind(styles);
const socialIcons = {
    facebook: faFacebook,
    instagram: faInstagram,
    github: faGithub,
    youtube: faYoutube,
};
function BlogInteraction() {
    let {
        blog: {
            blog_id,
            activity,
            activity: { total_likes, total_comments },
            author: {
                personal_info: { username: author_username },
                social_links,
            },
        },
        setBlog,
    } = useContext(BlogContext);
    let {
        userAuth: { username },
    } = useContext(UserContext);
    return (
        <div className={cx("blog-interaction")}>
            <div className={cx("total")}>
                <p className={cx("total-likes")}>{total_likes}</p>
                <FontAwesomeIcon icon={faHeart} className={cx("icon")} />
                <p className={cx("total-comments")}>{total_comments}</p>
                <FontAwesomeIcon icon={faComment} className={cx("icon")} />
                {username === author_username ? (
                    <Link to={`/editor/${blog_id}`}><Button text>Edit Blog</Button></Link>
                ) : (
                    ""
                )}
            </div>

            <div className={cx("social")}>
                <div className={cx("social-link")}>
                    {Object.keys(social_links).map((social) => {
                        let link = social_links[social];
                        let icon = socialIcons[social.toLowerCase()];
                        return link ? (
                            <Link to={link} key={social} target="_blank">
                                {icon ? (
                                    <Button
                                        inactive
                                        className={cx("social-icon")}
                                    >
                                        <FontAwesomeIcon
                                            icon={icon}
                                            className={cx("icon")}
                                        />
                                    </Button>
                                ) : (
                                    social
                                )}
                            </Link>
                        ) : null;
                    })}
                </div>
            </div>
        </div>
    );
}

export default BlogInteraction;
