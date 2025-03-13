import classNames from "classnames/bind";
import styles from "./Trip.module.scss";

const cx = classNames.bind(styles);
function Trip({
    icon,
    title,
    desc,
    arrow,
    toolkit,
    mission,
    className,
    children,
    ...props
}) {
    const classes = cx("card-trip", {
        toolkit,
        mission,
        [className]: className,
    });
    return (
        <section className={classes} {...props}>
            <div className={cx("card")}>
                <div className={cx("content")}>
                    <img className={cx("icon")} src={icon} alt="Icon" />
                    {title && <h2 className={cx("title")}>{title}</h2>}
                    {desc && <p className={cx("desc")}>{desc}</p>}
                    <img src={arrow} className={cx("arrow")} alt="Arrow" />
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Trip;
