import classNames from "classnames/bind";
import styles from "./BlogCard.module.scss";
const cx = classNames.bind(styles);

function BlogCard({ blog, index }) {
    if (!blog) return null;
    let { title, desc, banner } = blog;
    return (
        <div className={cx("remaining-blog-card")}>
            <img src={banner} className={cx("banner")} />
            <h3 className={cx("title")}>{title}</h3>
            <p className={cx("desc")}>{desc}</p>
            <p className={cx("more")}>Learn More</p>
        </div>
    );
}

export default BlogCard;
