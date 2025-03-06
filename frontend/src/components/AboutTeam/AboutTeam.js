import React from "react";
import styles from "./AboutTeam.scss";
import classNames from "classnames/bind";
import image from "~/assets/image";

const cx = classNames.bind(styles)
function AboutTeam() {
    return (
        <div className={cx("team")}>
            <div className={cx("container")}>
                <div className={cx("inner")}>
                    <h2 className={cx("title")}>Meet the team</h2>
                    <div className={cx("member")}>
                        <div className={cx("member-list")}>
                            <img className={cx("avt")} src={image.member_01_about} alt="Member01" />
                            <h7 classNames={cx("name")}>David Warner</h7>
                        </div>
                        <div className={cx("member-list")}>
                            <img className={cx("avt","orange")} src={image.member_02_about} alt="Member02" />
                            <h7 classNames={cx("name")}>Aaron Finch</h7>
                        </div>
                        <div className={cx("member-list")}>
                            <img className={cx("avt","blue")} src={image.member_03_about} alt="Member03" />
                            <h7 classNames={cx("name")}>Steven Smith</h7>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutTeam;