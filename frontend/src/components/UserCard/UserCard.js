import classNames from "classnames/bind";
import styles from "./UserCard.module.scss";
const cx = classNames.bind(styles);

function UserCard({ user }) {
    return (
        <div className={cx("user")}>
            <img
                src={user.personal_info.profile_img}
                className={cx("profile-img")}
            />
            <p className={cx("name")}>@{user.personal_info.username}</p>
        </div>
    );
}

export default UserCard;
