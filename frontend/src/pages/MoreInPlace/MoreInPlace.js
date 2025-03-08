import classNames from "classnames/bind";
import styles from "./MoreInPlace.module.scss";
import HeroSection from "~/components/HeroSection";
import image from "~/assets/image";
import Card from "~/components/Card";
const cx = classNames.bind(styles);
function MoreInPlace() {
    return (
        <section className={cx("more-in-place")}>
            <HeroSection
                heroBackground={image.hero_decor_image}
                title={"Must see attractions  in Sydney"}
                description={
                    "Discover the world with local experts, one tailor-made trip at a time. One planet. Endless possibilities. The most amazing destinations in the world are waiting for you."
                }
                showForm={false}
                more
            >
                <div className={cx("image-list")}>
                    <img src={image.discover_09} className={cx("more")}></img>
                    <img src={image.discover_09} className={cx("")}></img>
                    <img src={image.discover_09} className={cx("")}></img>
                </div>
            </HeroSection>
            <div className={cx("container")}></div>
        </section>
    );
}

export default MoreInPlace;
