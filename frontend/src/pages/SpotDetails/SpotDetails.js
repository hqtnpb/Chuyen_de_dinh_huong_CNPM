import classNames from "classnames/bind";
import styles from "./SpotDetails.module.scss";
import HeroSection from "~/components/HeroSection";
import image from "~/assets/image";

const cx = classNames.bind(styles)
function SpotDetails() {
    return (
        <div className={cx("spotdetails")}>
            <div className={cx("")}>
                <HeroSection
                    heroImage={image.spotdetails_img}
                    heroBackground={image.spotdetails_background}
                    title={"Sydney Harbour Bridge"}
                    description={"Sydneysiders love their giant 'coathanger', which opened in 1932. The best way to experience this majestic structure is on foot. Stairs and lifts ascend the bridge from both shores, leading to a footpath on the eastern side (the western side is a bike path)."}
                    showForm={false}
                    spotdetails
                >
                    <div className={cx("city")}>
                        <img className={cx("icon")} src={image.icon_spotdetails} alt="Icon" />
                        <p className={cx("location")}>Sydney Harbour Bridge</p>

                    </div>
                </HeroSection>
            </div>
        </div>
    );
}

export default SpotDetails;