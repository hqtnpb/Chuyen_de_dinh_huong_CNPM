import React from "react";
import styles from "./MissionAbout.module.scss";
import classNames from "classnames/bind";
import image from "~/assets/image";
import Trip from "../Trip";

const cardMission = [
    {
        icon: image.icon_guidance_about,
        title: "Trip Guidance",
        desc: "Discover some of the most unique and fulfilling experiences your next destination has to offer. Providing the best.",
        arrow: image.icon_arrow_about,
    },

    {
        icon: image.icon_value_about,
        title: "Trip Value",
        desc: "Tips & Travel trends to help you pick the perfect time to visit this destination. Providing the best tips for you.",
        arrow: image.icon_arrow_about,
    },

    {
        icon: image.icon_peace_about,
        title: "Peace of Mind",
        desc: "Golden rules to keep in mind when traveling to this destination. Providing the best tips & tricks for you.",
        arrow: image.icon_arrow_about,
    }
]

const cx = classNames.bind(styles);
function MissionAbout() {
    return (
        <div className={cx("mission")}>
            <div className={cx("container")}>
                <div className={cx("inner")}>
                    <div className={cx("content")}>
                        <div className={cx("text")}>
                            <h2 className={cx("title")}>Our mission is give the best</h2>
                            <p className={cx("desc")}>For 70 years, the person-to-person experience has been at the very core of Liberty Travel’s mission.</p>
                        </div>
                        <div className={cx("card-list")}>
                            {cardMission.map((data, index) => (
                                <Trip
                                    key={index}
                                    icon={data.icon}
                                    title={data.title}
                                    desc={data.desc}
                                    arrow={data.arrow}
                                    mission>

                                </Trip>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionAbout;