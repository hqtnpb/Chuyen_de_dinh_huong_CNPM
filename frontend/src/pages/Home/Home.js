import classNames from "classnames/bind";

import image from "~/assets/image";
import styles from "./Home.module.scss";
import HeroSection from "~/components/HeroSection";
import FeaturesSection from "~/components/FeaturesSection";
import DiscoverSection from "~/components/DiscoverSection";
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx("home")}>
            <HeroSection
                heroImage={image.hero_image}
                heroBackground={image.hero_decor_image}
                title={"Explore the Beauty of Journey"}
                description={
                    "Create a fully customized day-by-day itinerary for free. Imagine checking one place for your travel details."
                }
                className={cx()}
            ></HeroSection>
            <FeaturesSection></FeaturesSection>
            <DiscoverSection></DiscoverSection>
        </div>
    );
}

export default Home;
