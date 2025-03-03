import classNames from "classnames/bind";

import styles from "./Card.module.scss";
import image from "~/assets/image";
const cx = classNames.bind(styles);

function Card({
    imgSrc,
    category,
    location,
    title,
    desc,
    rating,
    discover = false,
    explore = false,
    destination = false,
    className,
    ...passProps
}) {
    const classes = cx("card-item", {
        discover,
        explore,
        destination,
        [className]: className,
    });
    return (
        <article className={classes} {...passProps}>
            <div className={cx("card-img")}>
                <img src={imgSrc} className={cx("image")} />
                {location && (
                    <div className={cx("location")}>
                        <img
                            src={image.explore_location_icon}
                            className={cx("icon")}
                        />
                        <span className={cx("location-name")}>{location}</span>
                    </div>
                )}
            </div>
            <div className={cx("content")}>
                {category && <p className={cx("category")}>{category}</p>}
                <h3 className={cx("title")}>{title}</h3>
                {desc && <p className={cx("desc")}>{desc}</p>}
                <div className={cx("rate")}>
                    <img src={image.star} className={cx("star")} />
                    <span className={cx("rating")}>{rating} Ratings</span>
                </div>
            </div>
        </article>
    );
}

export default Card;
