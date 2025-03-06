import React from "react";
import styles from "./MissionAbout.scss";
import classNames from "classnames/bind";
import image from "~/assets/image";
import { Button } from "@mui/material";

const cx = classNames.bind(styles);
function MissionAbout() {
    return (
        <div className={cx("mission")}>
            <div className={cx("container")}>
                <div className={cx("inner")}>
                    <div className={cx("content")}>
                        <div className={cx("text")}>
                            <h2 className={cx("title")}>Our mission is give the best</h2>
                            <p className={cx("desc")}>
                                For 70 years, the person-to-person experience has been at the very<br></br> core of Liberty Travel’s mission.
                            </p>

                        </div>
                        <div className={cx("trip")}>
                            <div className={cx("list")}>
                                <img className={cx("img")} src={image.icon_guidance_about} alt="Guidance" />
                                <h7 className={cx("title-list")}>Trip Guidance</h7>
                                <p className={cx("desc-list")}>
                                    Discover some of the most unique and fulfilling experiences your next destination has to offer. Providing the best.
                                </p>
                                <img className={cx("arrow")} src={image.icon_arrow_about} alt="Arrow" />
                            </div>
                            <div className={cx("list")}>
                                <img className={cx("img")} src={image.icon_value_about} alt="Value" />
                                <h7 className={cx("title-list")}>Trip Value</h7>
                                <p className={cx("desc-list")}>
                                    Tips & Travel trends to help you pick the perfect time to visit this destination. Providing the best tips for you.
                                </p>
                                <img className={cx("arrow")} src={image.icon_arrow_about} alt="Arrow" />

                            </div>
                            <div className={cx("list")}>
                                <img className={cx("img")} src={image.icon_peace_about} alt="Peace" />
                                <h7 className={cx("title-list")}>Peace of Mind</h7>
                                <p className={cx("desc-list")}>
                                    Golden rules to keep in mind when traveling to this destination. Providing the best tips & tricks for you.
                                </p>
                                <img className={cx("arrow")} src={image.icon_arrow_about} alt="Arrow" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionAbout;