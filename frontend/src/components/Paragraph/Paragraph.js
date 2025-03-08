import classNames from "classnames/bind";
import styles from "./Paragraph.module.scss";

const cx = classNames.bind(styles)
function Paragraph({
    title,
    desc,
    text = false,
    className,
    children, ...props }) {
    const classes = cx("over", {
        text,
        [className]: className,
    });
    return (
        <section className={classes} {...props}>
            <div className={cx("content")}>
                {title && <h2 className={cx("title")}>{title}</h2>}
                {desc && <p className={cx("desc")}>{desc}</p>}
                {children}
            </div>
        </section>
    );
}

export default Paragraph;