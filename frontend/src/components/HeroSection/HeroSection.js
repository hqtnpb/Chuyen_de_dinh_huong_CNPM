import classNames from "classnames/bind";

import styles from "./HeroSection.module.scss";
import Button from "~/components/Button/Button";
import image from "~/assets/image";
const cx = classNames.bind(styles);

function HeroSection({
    heroImage,
    heroBackground,
    title,
    description,
    showForm = true,
    children,
    ...props
}) {
    return (
        <section className={cx("hero")}>
            <div className={cx("container")}>
                <div className={cx("inner")}>
                    <img
                        src={heroBackground}
                        alt="Path way"
                        className={cx("background")}
                    ></img>
                    <div className={cx("content")}>
                        <h1 className={cx("title")}>{title}</h1>
                        <p className={cx("desc")}>{description}</p>
                      
                        <div className={cx("search")}>
                            {showForm && (
                                <form className={cx("form")}>
                                    <img
                                        src={image.location_icon}
                                        className={cx("icon")}
                                    ></img>
                                    <input
                                        type="text"
                                        placeholder="Where do you want to go?"
                                        className={cx("input")}
                                    />
                                    <img
                                        src={image.calendar_icon}
                                        className={cx("icon")}
                                    ></img>
                                    <input
                                        type="text"
                                        placeholder="When you are going?"
                                        className={cx("input")}
                                    />

                                    <Button
                                        active
                                        className={cx("btn")}
                                        type="button"
                                    >
                                        Search
                                    </Button>
                                </form>
                            )}
                        </div>
                        <img
                            src={heroImage}
                            className={cx("image")}
                            alt="Path Way"
                        ></img>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
