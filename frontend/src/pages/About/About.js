import React from "react";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import HeroAbout from "~/components/HeroAbout";
import FeaturesAbout from "~/components/FeaturesAbout";
import AboutTeam from "~/components/AboutTeam";
import DiversityAbout from "~/components/DiversityAbout";
import MissionAbout from "~/components/MissionAbout";
const cx = classNames.bind(styles)
function About() {
    return (
        <div className={cx("about")}>
            <HeroAbout></HeroAbout>
            <FeaturesAbout></FeaturesAbout>
            <AboutTeam></AboutTeam>
            <DiversityAbout></DiversityAbout>
            <MissionAbout></MissionAbout>
        </div>
    )
}

export default About;
